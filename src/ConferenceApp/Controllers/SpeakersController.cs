﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using ConferenceApp.Services;
using ConferenceApp.Services.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ConferenceApp.Controllers
{

    //api/speakers
    [Route("api/[controller]")]
    public class SpeakersController : Controller
    {
        private SpeakerService _speakerServ;
        public SpeakersController(SpeakerService speakerServ)
        {
            _speakerServ = speakerServ;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<SpeakerDTO> GetSpeakerList()
        {
            return _speakerServ.GetSpeakerList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
