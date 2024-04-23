namespace DIS6225_FinalProject_MVC.Models
{
    public class TeamMember
    {
        public int TeamMemberId { get; set; }
        public string Name { get; set; }
        public string Role { get; set; }
        public string Contributions { get; set; }
        public string ImageUrl { get; set; }
        public string GitHubUrl { get; set; }
    }

    public class AboutUsModel
    {
        public IEnumerable<TeamMember> TeamMembers { get; set; }
        public string DataModelImageUrl { get; set; }
        public string GitHubRepoUrl { get; set; }
    }

}
