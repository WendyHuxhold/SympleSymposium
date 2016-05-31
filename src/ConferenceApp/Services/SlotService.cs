﻿using ConferenceApp.Infrastructure;
using ConferenceApp.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConferenceApp.Services
{
    public class SlotService
    {
        private SlotRepository _slotRepo;

        public SlotService(SlotRepository slotRepo)
        {
            _slotRepo = slotRepo;
        }
                
        public IList<SlotDTO> GetSlotList(int conferenceId)
        {
            var slots = (from s in _slotRepo.List(conferenceId)
                    select new SlotDTO
                    {
                        Id = s.Id,
                        StartTime = s.StartTime,
                        EndTime = s.EndTime,
                        Room = s.Room.Name,
                        Presentation = new PresentationDTO()
                        {
                            Title = s.Presentation.Title,
                            Description = s.Presentation.Description
                        },
                        Speaker = new SpeakerDTO()
                        {
                            FirstName = s.Speaker.FirstName,
                            LastName = s.Speaker.LastName,
                            Title = s.Speaker.Title,
                            Phone = s.Speaker.Phone,
                            Email = s.Speaker.Email,
                            Company = s.Speaker.Company,
                            CoStreet = "",
                            CoCity = "",
                            CoState = "",
                            CoZip = "",
                            Bio = s.Speaker.Bio,
                            ImageUrl = s.Speaker.ImageUrl

                        }
                    }).ToList();

            return slots;
        }
    }
}
