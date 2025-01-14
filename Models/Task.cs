using System.ComponentModel.DataAnnotations;

namespace TaskManager.Models;

public class Task
{
    [Key]
    public int Id { get; set; }

    [Required] 
    [StringLength(100)] 
    public string Title { get; set; } = string.Empty;
    
    [Required]
    [StringLength(500)]
    public string Description { get; set; } = string.Empty;
    
    [Required]
    public DateTime DueDate { get; set; }
    
    [Required]
    public bool IsComplete { get; set; }
}