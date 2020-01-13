using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI_agencia_viajes.Models;

namespace WebAPI_agencia_viajes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgenciaController : ControllerBase
    {
        private readonly AgenciaViajesContext _context;

        public AgenciaController(AgenciaViajesContext context)
        {
            _context = context;
        }

        // GET: api/Agencia
        [HttpGet]
        public IEnumerable<Agencia> GetAgencia()
        {
            return _context.Agencia;
        }

        // GET: api/Agencia/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAgencia([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var agencia = await _context.Agencia.FindAsync(id);

            if (agencia == null)
            {
                return NotFound();
            }

            return Ok(agencia);
        }

        // PUT: api/Agencia/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAgencia([FromRoute] int id, [FromBody] Agencia agencia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != agencia.Id)
            {
                return BadRequest();
            }

            _context.Entry(agencia).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AgenciaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Agencia
        [HttpPost]
        public async Task<IActionResult> PostAgencia([FromBody] Agencia agencia)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Agencia.Add(agencia);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAgencia", new { id = agencia.Id }, agencia);
        }

        // DELETE: api/Agencia/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAgencia([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var agencia = await _context.Agencia.FindAsync(id);
            if (agencia == null)
            {
                return NotFound();
            }

            _context.Agencia.Remove(agencia);
            await _context.SaveChangesAsync();

            return Ok(agencia);
        }

        private bool AgenciaExists(int id)
        {
            return _context.Agencia.Any(e => e.Id == id);
        }
    }
}