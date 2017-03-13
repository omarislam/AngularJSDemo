using MoviesApp.AngularDemonstration.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoviesApp.AngularDemonstration.Api.Context
{
    public static class MoviesDBContext
    {
        public static List<MovieViewModel> db;
        public static List<MovieComment> comments;

        public static void Intialize()
        {
            if(db == null)
            {
                db = new List<MovieViewModel>();
                db.Add(new MovieViewModel
                {
                    Id = 1,
                    Title = "Gravity",
                    Description = "Two astronauts work together to survive after an accident which leaves them alone in space.",
                    Url = @"https://images-na.ssl-images-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    Downloads =1267,
                    Views =675,
                    Rating =1
                });

                db.Add(new MovieViewModel
                {
                    Id = 2,
                    Title = "Shawshank Redemption",
                    Description = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                    Url = @"https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    Downloads = 9898,
                    Views = 5655,
                    Rating = 5

                });


                db.Add(new MovieViewModel
                {
                    Id = 3,
                    Title = "The Godfather",
                    Description = "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                    Url = @"https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY268_CR3,0,182,268_AL_.jpg",
                    Downloads = 786,
                    Views = 3443,
                    Rating = 1

                });


                db.Add(new MovieViewModel
                {
                    Id = 4,
                    Title = "Pulp Fiction",
                    Description = "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                    Url = @"https://images-na.ssl-images-amazon.com/images/M/MV5BYTYyMDgwM2YtMzE0ZS00OTNhLWExMzctNzZlNmIzY2M3NmNjXkEyXkFqcGdeQXVyNjAwODA4Mw@@._V1_.jpg",
                    Downloads = 8734,
                    Views = 11234,
                    Rating = 5

                });


                comments = new List<MovieComment>();

                comments.Add(new MovieComment
                {
                    Id = 1,
                    Comment = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in som ",
                    Email = "eng.islam@msn.com",
                    MovieId = 1,
                    Name = "Islam"
                    
                
                });


                comments.Add(new MovieComment
                {
                    Id = 1,
                    Comment = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in som ",
                    Email = "eng.islam@msn.com",
                    MovieId = 1,
                    Name = "Islam"


                });

                comments.Add(new MovieComment
                {
                    Id = 4,
                    Comment = "cccbbb bbb   mnmmm vailable, but the majority have suffered alteration in som ",
                    Email = "eng.islam@msn.com",
                    MovieId = 1,
                    Name = "Islam"


                });

                comments.Add(new MovieComment
                {
                    Id = 3,
                    Comment = "vvvv xxx nnn  em Ipsum available, but the majority have suffered alteration in som ",
                    Email = "eng.islam@msn.com",
                    MovieId = 1,
                    Name = "Islam"


                });
            }
        }
    }
}