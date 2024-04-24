using System.ComponentModel.DataAnnotations.Schema;

namespace DIS6225_FinalProject_MVC.Models
{
    public class Location
    {
        public int LocationID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        //public double Latitude { get; set; }
        //public double Longitude { get; set; }
        public string Type { get; set; }

        // RatingAverage is not stored in the database but calculated on the fly
        [NotMapped] // Ensure to add using System.ComponentModel.DataAnnotations.Schema;
        public double RatingAverage => Reviews.Any() ? Reviews.Average(r => r.Rating) : 0;

        // Navigation property for related Reviews
        public virtual ICollection<Review> Reviews { get; set; } = new HashSet<Review>();
    }

}
