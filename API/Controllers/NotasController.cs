using Microsoft.AspNetCore.Mvc;
using MinhasNotasAPI.Domain.Entities;


namespace MinhasNotasAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotasController : ControllerBase
    {
        private static readonly List<Nota> Notas = new List<Nota>();

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(Notas);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var nota = Notas.FirstOrDefault(n => n.Id == id);
            if (nota == null)
                return NotFound();
            return Ok(nota);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Nota nota)
        {
            nota.Id = Notas.Count > 0 ? Notas.Max(n => n.Id) + 1 : 1;
            Notas.Add(nota);
            return CreatedAtAction(nameof(Get), new { id = nota.Id }, nota);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Nota notaAtualizada)
        {
            var nota = Notas.FirstOrDefault(n => n.Id == id);
            if (nota == null)
                return NotFound();

          
            nota.Texto = notaAtualizada.Texto;
            nota.DataHora = notaAtualizada.DataHora;
            nota.Favorita = notaAtualizada.Favorita;
            nota.CorBackground = notaAtualizada.CorBackground;  

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var nota = Notas.FirstOrDefault(n => n.Id == id);
            if (nota == null)
                return NotFound();

            Notas.Remove(nota);
            return NoContent();
        }

        [HttpPatch("{id}/favoritar")]
        public IActionResult Favoritar(int id)
        {
            var nota = Notas.FirstOrDefault(n => n.Id == id);
            if (nota == null)
                return NotFound();

            nota.Favorita = !nota.Favorita;
            return NoContent();
        }
    }
}
