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
    public class CommentsController : ApiController
    {
        // GET: api/Comments
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Comments/5
        public IEnumerable<MovieComment> Get(int id)
        {
            return MoviesDBContext.comments.Where(d => d.MovieId == id).ToList();
        }

        // POST: api/Comments
        [HttpPost]
        [HttpOptions]
        public void Post([FromBody]MovieComment model)
        {
            if(model != null)
            {
                MoviesDBContext.comments.Add(model);
            }
        }

        // PUT: api/Comments/5
        public void Put(int id, [FromBody]MovieComment model)
        {
        }

        // DELETE: api/Comments/5
        public void Delete(int id)
        {
        }
    }
}
