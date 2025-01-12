using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TaskManager.Models;

namespace TaskManager.Controllers;

public class TaskController : Controller
{
    private readonly ILogger<TaskController> _logger;
    
    public TaskController(ILogger<TaskController> logger)
    {
        _logger = logger;
    }
}