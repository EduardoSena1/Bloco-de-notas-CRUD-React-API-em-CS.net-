using MinhasNotasAPI.Domain.Entities;
using System.Collections.Generic;
using System.Linq;

namespace MinhasNotasAPI.Domain.Services
{
    public class NotaService
    {
        private readonly List<Nota> _notas;
        private int _nextId;

        public NotaService()
        {
            _notas = new List<Nota>();
            _nextId = 1;
        }

        public IEnumerable<Nota> GetAll()
        {
            return _notas;
        }

        public Nota? GetById(int id)
        {
            return _notas.FirstOrDefault(n => n.Id == id);
        }

        public Nota Create(Nota novaNota)
        {
            novaNota.Id = _nextId++;
            _notas.Add(novaNota);
            return novaNota;
        }

        public bool Update(int id, Nota notaEditada)
        {
            var nota = GetById(id);
            if (nota == null)
            {
                return false;
            }
           
            nota.Texto = notaEditada.Texto;
            nota.DataHora = notaEditada.DataHora;
            return true;
        }

        public bool Delete(int id)
        {
            var nota = GetById(id);
            if (nota == null)
            {
                return false;
            }
            _notas.Remove(nota);
            return true;
        }
    }
}
