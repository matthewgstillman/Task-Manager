using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TaskManager.Data;
using TaskManager.Models;
using Microsoft.EntityFrameworkCore;

namespace TaskManager.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TaskController : Controller
{
    private readonly ILogger<TaskController> _logger;
    private readonly TaskDbContext _context;

    public TaskController(TaskDbContext context, ILogger<TaskController> logger)
    {
        _logger = logger;
        _context = context;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetAllTasks()
    {
        var tasks = await _context.Tasks.ToListAsync();
        return Ok(tasks);
    }
    
    [HttpGet("{id}")]
    public async Task<IActionResult> GetTaskById(int id)
    {
        var task = await _context.Tasks.FindAsync(id);
        if (task == null)
        {
            return NotFound();
        }
        return Ok(task);
    }
    
    [HttpPost]
    public async Task<IActionResult> CreateTask([FromBody] TaskManager.Models.Task task)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        _context.Tasks.Add(task);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetTaskById), new { id = task.Id }, task);
    }
    
    [HttpDelete("{id}")]
    public async Task<IActionResult> RemoveTask(int id)
    {
        var task = await _context.Tasks.FindAsync(id);
        if (task == null)
        {
            return NotFound();
        }

        _context.Tasks.Remove(task);
        await _context.SaveChangesAsync();
        return NoContent();
    }
    
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTask(int id, [FromBody] TaskManager.Models.Task task)
    {
        if (id != task.Id)
        {
            return BadRequest();
        }

        var existingTask = await _context.Tasks.FindAsync(id);
        if (existingTask == null)
        {
            return NotFound();
        }
        
        existingTask.Title = task.Title;
        existingTask.Description = task.Description;
        existingTask.DueDate = task.DueDate;
        existingTask.IsComplete = task.IsComplete;

        await _context.SaveChangesAsync();
        return NoContent();
    }
}
