namespace DIS6225_FinalProject_MVC.Models
{
    public class Review
    {
        public int ReviewID { get; set; }
        public int LocationID { get; set; }
        public string Title { get; set; }
        public double Rating { get; set; }
        public string Text { get; set; }
        public DateTime DatePosted { get; set; }

        // Navigation property back to Location
        public virtual Location Location { get; set; }
    }

}
