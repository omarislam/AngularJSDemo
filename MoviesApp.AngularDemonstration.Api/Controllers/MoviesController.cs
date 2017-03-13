using MoviesApp.AngularDemonstration.Api.Context;
using MoviesApp.AngularDemonstration.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MoviesApp.AngularDemonstration.Api.Controllers
{
    public class MoviesController : ApiController
    {
        public MoviesController()
        {
            MoviesDBContext.Intialize();
        }


        // GET: api/Movies
        public IEnumerable<MovieViewModel> Get()
        {
            return MoviesDBContext.db;
        }

        // GET: api/Movies/5
        public MovieViewModel Get(int id)
        {
            var movie = MoviesDBContext.db.FirstOrDefault(d=> d.Id == id);
            if(movie != null)
            {
                return movie;
            }
            else
            {
                return null;
            }


        }

        // POST: api/Movies
        public void Post([FromBody]string value)
        {

        }

        // PUT: api/Movies/5
        [HttpPut]
        [HttpOptions]
        public void Put(int id, [FromBody]MovieViewModel movieViewModel)
        {
            var movie = MoviesDBContext.db.FirstOrDefault(d => d.Id == id);
            if(movie != null && movieViewModel != null)
            {
                MoviesDBContext.db.Remove(movie);
                MoviesDBContext.db.Add(movieViewModel);
            }           

        }

        // DELETE: api/Movies/5
        public void Delete(int id)
        {
        }
    }
}
