﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoviesApp.AngularDemonstration.Api.Models
{
    public class MovieComment
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public string Name{ get; set; }
        public string Email { get; set; }
        public string Comment { get; set; }


    }
}