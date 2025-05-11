const {
  spawn
} = require("child_process");
const logger = require("./utils/log");
const express = require("express");
const path = require("path");
const chalkercli = require("chalkercli");
const app = express();
const port = process.env.PORT || 0xbb8;
const CFonts = require("cfonts");
app.get('/', function (_0x430d24, _0x5a9c07) {
  _0x5a9c07.sendFile(path.join(__dirname, "/index.html"));
});
app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
function startBot(_0x2cb8ba) {
  if (_0x2cb8ba) {
    logger(_0x2cb8ba, "[ START ]");
  }
  const _0x5d45e6 = spawn("node", ["--trace-warnings", "--async-stack-traces", "SAGOR.js"], {
    'cwd': __dirname,
    'stdio': "inherit",
    'shell': true
  });
  _0x5d45e6.on("close", async _0x3a8a2b => {
    var _0x470d02 = _0x3a8a2b.toString();
    if (_0x3a8a2b == 0x1) {
      return startBot("↺ Restarting...");
    } else {
      if (_0x470d02.startsWith('2')) {
        await new Promise(_0x418efc => setTimeout(_0x418efc, parseInt(_0x470d02.slice(0x1)) * 0x3e8));
        startBot("Back in operation ...");
      } else {
        return;
      }
    }
  });
  _0x5d45e6.on("error", function (_0x47e3e8) {
    logger("An error occurred: " + JSON.stringify(_0x47e3e8), "[ ERROR ]");
  });
}
const dec = function () {
  let _0x1fb0da = true;
  return function (_0x4f4d53, _0x14040f) {
    const _0x57ca0e = _0x1fb0da ? function () {
      if (_0x14040f) {
        const _0x12e6f5 = _0x14040f.apply(_0x4f4d53, arguments);
        _0x14040f = null;
        return _0x12e6f5;
      }
    } : function () {};
    _0x1fb0da = false;
    return _0x57ca0e;
  };
}();
(function () {
  dec(this, function () {
    const _0x630f24 = new RegExp("function *\\( *\\)");
    const _0x4d8ef3 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x5e126d = getdatatoken("init");
    if (!_0x630f24.test(_0x5e126d + "chain") || !_0x4d8ef3.test(_0x5e126d + "input")) {
      _0x5e126d('0');
    } else {
      getdatatoken();
    }
  })();
})();
function getdatatoken(_0x47561a) {
  function _0x22e7dd(_0xfd9331) {
    if (typeof _0xfd9331 === "string") {
      return function (_0x4bebe4) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0xfd9331 / _0xfd9331).length !== 0x1 || _0xfd9331 % 0x14 === 0x0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x22e7dd(++_0xfd9331);
  }
  try {
    if (_0x47561a) {
      return _0x22e7dd;
    } else {
      _0x22e7dd(0x0);
    }
  } catch (_0x298886) {}
}
function startBot(_0x409a41) {
  if (_0x409a41) {
    logger(_0x409a41, "[ MIRAI BOT ]");
  }
  const _0x22b115 = spawn("node", ["--trace-warnings", "--async-stack-traces", "SAGOR.js"], {
    'cwd': __dirname,
    'stdio': "inherit",
    'shell': true
  });
  _0x22b115.on("close", async _0x8f65e0 => {
    var _0x3699d6 = _0x8f65e0.toString();
    if (_0x8f65e0 == 0x1) {
      return startBot("SAGOR BOT IS READY");
    } else {
      if (_0x3699d6.startsWith('2')) {
        await new Promise(_0x1b62fc => setTimeout(_0x1b62fc, parseInt(_0x3699d6.slice(0x1)) * 0x3e8));
        startBot("SAGOR BOT IS READY");
      } else {
        return;
      }
    }
  });
  _0x22b115.on("error", function (_0x2268a0) {
    logger("An error occurred: " + JSON.stringify(_0x2268a0), "[ ERROR ]");
  });
}
const rainbow2 = chalkercli.rainbow("━━━━━━━━━━━━━━━━[ SAGOR FILE ]━━━━━━━━━━━━━━━━━");
rainbow2.render();
CFonts.say("Sagor", {
  'font': "block",
  'align': "center",
  'gradient': ["red", "magenta"]
});
app.get("/info", function (_0x1c410a, _0x5b123b) {
  const _0x4c45a1 = chalkercli.rainbow("━━━━━━━━━━━━━━[ INFO SERVER USER ]━━━━━━━━━━━━━");
  _0x4c45a1.render();
  const _0x554637 = {
    'ip': _0x1c410a.ip,
    'hostname': _0x1c410a.hostname,
    'country': "N/A",
    'city': "N/A",
    'org': 'N/A',
    'browser': "N/A (since this is a Node.js environment)"
  };
  logger(_0x554637.ip, "| IP Address |");
  logger(_0x554637.hostname, "| Domain Name |");
  logger("N/A", "| Country |");
  logger("N/A", "| City |");
  logger('N/A', "| ISP (Internet Service Provider) |");
  logger("N/A (since this is a Node.js environment)", "| Browser |");
  _0x5b123b.json(_0x554637);
});
setTimeout(async function () {
  await new Promise(_0x842001 => setTimeout(_0x842001, 0x1f4));
  logger("Sagor Bot system is loading data...", "[ CHECK ]");
  startBot();
}, 0x1b58);
