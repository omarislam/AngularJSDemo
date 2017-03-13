using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoviesApp.AngularDemonstration.Api.Models
{
    public class MovieViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public int Downloads { get; set; }
        public int Views { get; set; }
        public int Rating { get; set; }



    }
}