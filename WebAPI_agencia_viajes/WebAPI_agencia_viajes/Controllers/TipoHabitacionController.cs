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
    public class TipoHabitacionController : ControllerBase
    {
        private readonly AgenciaViajesContext _context;

        public TipoHabitacionController(AgenciaViajesContext context)
        {
            _context = context;
        }

        // GET: api/TipoHabitacion
        [HttpGet]
        public IEnumerable<TipoHabitacion> GetTipoHabitacion()
        {
            return _context.TipoHabitacion;
        }

        // GET: api/TipoHabitacion/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTipoHabitacion([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tipoHabitacion = await _context.TipoHabitacion.FindAsync(id);

            if (tipoHabitacion == null)
            {
                return NotFound();
            }

            return Ok(tipoHabitacion);
        }

        // PUT: api/TipoHabitacion/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoHabitacion([FromRoute] int id, [FromBody] TipoHabitacion tipoHabitacion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tipoHabitacion.Id)
            {
                return BadRequest();
            }

            _context.Entry(tipoHabitacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoHabitacionExists(id))
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

        // POST: api/TipoHabitacion
        [HttpPost]
        public async Task<IActionResult> PostTipoHabitacion([FromBody] TipoHabitacion tipoHabitacion)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TipoHabitacion.Add(tipoHabitacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoHabitacion", new { id = tipoHabitacion.Id }, tipoHabitacion);
        }

        // DELETE: api/TipoHabitacion/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoHabitacion([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tipoHabitacion = await _context.TipoHabitacion.FindAsync(id);
            if (tipoHabitacion == null)
            {
                return NotFound();
            }

            _context.TipoHabitacion.Remove(tipoHabitacion);
            await _context.SaveChangesAsync();

            return Ok(tipoHabitacion);
        }

        private bool TipoHabitacionExists(int id)
        {
            return _context.TipoHabitacion.Any(e => e.Id == id);
        }
    }
}