﻿using ConferenceApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConferenceApp.Infrastructure
{
    public class ConferenceRepository
    {
        private ApplicationDbContext _db;
        public ConferenceRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public IQueryable<Conference> List()
        {
            return _db.Conferences;
        }

        public IQueryable<Conference> List(string organizerName)
        {
            return from c in _db.Conferences
                   where c.ApplicationUser.UserName == organizerName
                   select c;
        }

        public IQueryable<Conference> GetById(int id) {

            var conf = from c in _db.Conferences
                   where c.Id == id
                   select c;

            return conf;
        }

        //add a Conference by the organizer
        //public void Add(Conference conference)
        //{
        //    _db.Conferences.Add(conference);
        //}

        public void AddConference(Conference conference)
        {
            _db.Conferences.Add(conference);
            
        }

        public void SaveChanges() {
            _db.SaveChanges();
        }

        public void Delete(int confId)
        {
            var deleteConf =
                (from c in _db.Conferences
                 where c.Id == confId
                 select c).FirstOrDefault();
            _db.Conferences.Remove(deleteConf);
            _db.SaveChanges();
        }
    }
}
