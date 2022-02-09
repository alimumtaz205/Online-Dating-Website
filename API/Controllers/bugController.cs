using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    public class bugController : BaseApiController
    {
        private readonly DataContext _context;

        public bugController(DataContext context )
        {
            _context=context;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret()
        {
            return "secret text";
        }

        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var data=_context.Users.Find(-1);

            if(data==null) return NotFound();

            return Ok(data);
        }
        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
                var data=_context.Users.Find(-1);

                var dataReturn=data.ToString();

                return dataReturn;
            
        }
        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest("This is Bad Request");
        }
        
    }
}