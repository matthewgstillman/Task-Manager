using System.ComponentModel.DataAnnotations;

namespace TaskManager.Models;

public class Task
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [StringLength(100)]
    public string Title { get; set; }
    
    [StringLength(500)]
    public string Description { get; set; }
    
    [Required]
    public DateTime DueDate { get; set; }
    
    public bool IsComplete { get; set; }
}