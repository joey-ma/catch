// * source: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_innerheight *

// <script src="/lib/codemirror.js"></script>

// <script src="/lib/codemirror_jsx.js"></script>

// ****************** content.bundle.js ******************

const w = window.innerWidth;
const h = window.innerHeight;
document.getElementById('demo').innerHTML = `Width: ${w}<br>Height: ${h}`;

if (window.addEventListener) {
  window.addEventListener('resize', browserResize);
} else if (window.attachEvent) {
  window.attachEvent('onresize', browserResize);
}
let xbeforeResize = window.innerWidth;

function browserResize() {
  const afterResize = window.innerWidth;
  if ((xbeforeResize < (970) && afterResize >= (970)) || (xbeforeResize >= (970) && afterResize < (970))
    || (xbeforeResize < (728) && afterResize >= (728)) || (xbeforeResize >= (728) && afterResize < (728))
    || (xbeforeResize < (468) && afterResize >= (468)) || (xbeforeResize >= (468) && afterResize < (468))) {
    xbeforeResize = afterResize;

    if (document.getElementById('adngin-try_it_leaderboard-0')) {
      adngin.queue.push(() => { adngin.cmd.startAuction(['try_it_leaderboard']); });
    }
  }
  if (window.screen.availWidth <= 768) {
    restack(window.innerHeight > window.innerWidth);
  }
  fixDragBtn();
  showFrameSize();
}

// ****************** script within web app ******************

submitTryit();

function submitTryit(n) {
  if (window.editor) {
    window.editor.save();
  }
  const text = document.getElementById('textareaCode').value;
  const ifr = document.createElement('iframe');
  ifr.setAttribute('frameborder', '0');
  ifr.setAttribute('id', 'iframeResult');
  ifr.setAttribute('name', 'iframeResult');
  ifr.setAttribute('allowfullscreen', 'true');
  document.getElementById('iframewrapper').innerHTML = '';
  document.getElementById('iframewrapper').appendChild(ifr);
  if (fileID != '') {
    let t = text;
    t = t.replace(/=/gi, 'w3equalsign');
    t = t.replace(/\+/gi, 'w3plussign');
    let pos = t.search(/script/i);
    while (pos > 0) {
      t = `${t.substring(0, pos)}w3${t.substr(pos, 3)}w3${t.substr(pos + 3, 3)}tag${t.substr(pos + 6)}`;
      pos = t.search(/script/i);
    }
    document.getElementById('code').value = t;
    document.getElementById('codeForm').action = `https://tryit.w3schools.com/tryit_view.php?x=${Math.random()}`;
    document.getElementById('codeForm').method = 'post';
    document.getElementById('codeForm').acceptCharset = 'utf-8';
    document.getElementById('codeForm').target = 'iframeResult';
    document.getElementById('codeForm').submit();
  } else {
    const ifrw = (ifr.contentWindow) ? ifr.contentWindow : (ifr.contentDocument.document) ? ifr.contentDocument.document : ifr.contentDocument;
    ifrw.document.open();
    ifrw.document.write(text);
    ifrw.document.close();
    // 23.02.2016: contentEditable is set to true, to fix text-selection (bug) in firefox.
    // (and back to false to prevent the content from being editable)
    // (To reproduce the error: Select text in the result window with, and without, the contentEditable statements below.)
    if (ifrw.document.body && !ifrw.document.body.isContentEditable) {
      ifrw.document.body.contentEditable = true;
      ifrw.document.body.contentEditable = false;
    }
  }
}
let currentStack = true;
if ((window.screen.availWidth <= 768 && window.innerHeight > window.innerWidth) || '' === ' horizontal') { restack(true); }

function restack(horizontal) {
  let tc; let ic; let t; let i; let c; let f; let sv; let sh; let d; let height; let flt; let
    width;
  tc = document.getElementById('textareacontainer');
  ic = document.getElementById('iframecontainer');
  t = document.getElementById('textarea');
  i = document.getElementById('iframe');
  c = document.getElementById('container');
  sv = document.getElementById('stackV');
  sh = document.getElementById('stackH');
  tc.className = tc.className.replace('horizontal', '');
  ic.className = ic.className.replace('horizontal', '');
  t.className = t.className.replace('horizontal', '');
  i.className = i.className.replace('horizontal', '');
  c.className = c.className.replace('horizontal', '');
  if (sv) { sv.className = sv.className.replace('horizontal', ''); }
  if (sv) { sh.className = sh.className.replace('horizontal', ''); }
  stack = '';
  if (horizontal) {
    tc.className += ' horizontal';
    ic.className += ' horizontal';
    t.className += ' horizontal';
    i.className += ' horizontal';
    c.className += ' horizontal';
    if (sv) { sv.className += ' horizontal'; }
    if (sv) { sh.className += ' horizontal'; }
    stack = ' horizontal';
    document.getElementById('textareacontainer').style.height = '50%';
    document.getElementById('iframecontainer').style.height = '50%';
    document.getElementById('textareacontainer').style.width = '100%';
    document.getElementById('iframecontainer').style.width = '100%';
    currentStack = false;
  } else {
    document.getElementById('textareacontainer').style.height = '100%';
    document.getElementById('iframecontainer').style.height = '100%';
    document.getElementById('textareacontainer').style.width = '50%';
    document.getElementById('iframecontainer').style.width = '50%';
    currentStack = true;
  }
  fixDragBtn();
  showFrameSize();
}
function showFrameSize() {
  let t;
  let width; let
    height;
  width = Number(w3_getStyleValue(document.getElementById('iframeResult'), 'width').replace('px', '')).toFixed();
  height = Number(w3_getStyleValue(document.getElementById('iframeResult'), 'height').replace('px', '')).toFixed();
  document.getElementById('framesize').innerHTML = `Result Size: <span>${width} x ${height}</span>`;
}
let dragging = false;
let stack;
function fixDragBtn() {
  let textareawidth; let leftpadding; let dragleft; var containertop; let
    buttonwidth;
  var containertop = Number(w3_getStyleValue(document.getElementById('container'), 'top').replace('px', ''));
  if (stack != ' horizontal') {
    document.getElementById('dragbar').style.width = '5px';
    textareasize = Number(w3_getStyleValue(document.getElementById('textareawrapper'), 'width').replace('px', ''));
    leftpadding = Number(w3_getStyleValue(document.getElementById('textarea'), 'padding-left').replace('px', ''));
    buttonwidth = Number(w3_getStyleValue(document.getElementById('dragbar'), 'width').replace('px', ''));
    textareaheight = w3_getStyleValue(document.getElementById('textareawrapper'), 'height');
    dragleft = textareasize + leftpadding + (leftpadding / 2) - (buttonwidth / 2);
    document.getElementById('dragbar').style.top = `${containertop}px`;
    document.getElementById('dragbar').style.left = `${dragleft}px`;
    document.getElementById('dragbar').style.height = textareaheight;
    document.getElementById('dragbar').style.cursor = 'col-resize';
  } else {
    document.getElementById('dragbar').style.height = '5px';
    if (window.getComputedStyle) {
      textareawidth = window.getComputedStyle(document.getElementById('textareawrapper'), null).getPropertyValue('height');
      textareaheight = window.getComputedStyle(document.getElementById('textareawrapper'), null).getPropertyValue('width');
      leftpadding = window.getComputedStyle(document.getElementById('textarea'), null).getPropertyValue('padding-top');
      buttonwidth = window.getComputedStyle(document.getElementById('dragbar'), null).getPropertyValue('height');
    } else {
      dragleft = document.getElementById('textareawrapper').currentStyle.width;
    }
    textareawidth = Number(textareawidth.replace('px', ''));
    leftpadding = Number(leftpadding.replace('px', ''));
    buttonwidth = Number(buttonwidth.replace('px', ''));
    dragleft = containertop + textareawidth + leftpadding + (leftpadding / 2);
    document.getElementById('dragbar').style.top = `${dragleft}px`;
    document.getElementById('dragbar').style.left = '5px';
    document.getElementById('dragbar').style.width = textareaheight;
    document.getElementById('dragbar').style.cursor = 'row-resize';
  }
}
function dragstart(e) {
  e.preventDefault();
  dragging = true;
  const main = document.getElementById('iframecontainer');
}
function dragmove(e) {
  if (dragging) {
    document.getElementById('shield').style.display = 'block';
    if (stack != ' horizontal') {
      var percentage = (e.pageX / window.innerWidth) * 100;
      if (percentage > 5 && percentage < 98) {
        var mainPercentage = 100 - percentage;
        document.getElementById('textareacontainer').style.width = `${percentage}%`;
        document.getElementById('iframecontainer').style.width = `${mainPercentage}%`;
        fixDragBtn();
      }
    } else {
      const containertop = Number(w3_getStyleValue(document.getElementById('container'), 'top').replace('px', ''));
      var percentage = ((e.pageY - containertop + 20) / (window.innerHeight - containertop + 20)) * 100;
      if (percentage > 5 && percentage < 98) {
        var mainPercentage = 100 - percentage;
        document.getElementById('textareacontainer').style.height = `${percentage}%`;
        document.getElementById('iframecontainer').style.height = `${mainPercentage}%`;
        fixDragBtn();
      }
    }
    showFrameSize();
  }
}
function dragend() {
  document.getElementById('shield').style.display = 'none';
  dragging = false;
  const vend = navigator.vendor;
  if (window.editor && vend.indexOf('Apple') == -1) {
    window.editor.refresh();
  }
}
if (window.addEventListener) {
  document.getElementById('dragbar').addEventListener('mousedown', (e) => { dragstart(e); });
  document.getElementById('dragbar').addEventListener('touchstart', (e) => { dragstart(e); });
  window.addEventListener('mousemove', (e) => { dragmove(e); });
  window.addEventListener('touchmove', (e) => { dragmove(e); });
  window.addEventListener('mouseup', dragend);
  window.addEventListener('touchend', dragend);
  window.addEventListener('load', fixDragBtn);
  window.addEventListener('load', showFrameSize);
}

function retheme() {
  const cc = document.body.className;
  if (cc.indexOf('darktheme') > -1) {
    document.body.className = cc.replace('darktheme', '');
    if (opener) { opener.document.body.className = cc.replace('darktheme', ''); }
    localStorage.setItem('preferredmode', 'light');
  } else {
    document.body.className += ' darktheme';
    if (opener) { opener.document.body.className += ' darktheme'; }
    localStorage.setItem('preferredmode', 'dark');
  }
}
(
  function setThemeMode() {
    const x = localStorage.getItem('preferredmode');
    if (x == 'dark') {
      document.body.className += ' darktheme';
    }
  }());
function colorcoding() {
  const ua = navigator.userAgent;
  // Opera Mini refreshes the page when trying to edit the textarea.
  if (ua && ua.toUpperCase().indexOf('OPERA MINI') > -1) { return false; }
  window.editor = CodeMirror.fromTextArea(document.getElementById('textareaCode'), {
    mode: 'text/html',
    htmlMode: true,
    lineWrapping: true,
    smartIndent: false,
    addModeClass: true,
  });
  //  window.editor.on("change", function () {window.editor.save();});
}
colorcoding();

function w3_getStyleValue(elmnt, style) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(elmnt, null).getPropertyValue(style);
  }
  return elmnt.currentStyle[style];
}

function openMenu() {
  const x = document.getElementById('navbarDropMenu');
  const y = document.getElementById('menuOverlay');
  const z = document.getElementById('menuButton');
  if (z.className.indexOf('w3-text-gray') == -1) {
    z.className += ' w3-text-gray';
  } else {
    z.className = z.className.replace(' w3-text-gray', '');
  }
  if (z.className.indexOf('w3-gray') == -1) {
    z.className += ' w3-gray';
  } else {
    z.className = z.className.replace(' w3-gray', '');
  }
  if (x.className.indexOf('w3-show') == -1) {
    x.className += ' w3-show';
  } else {
    x.className = x.className.replace(' w3-show', '');
  }
  if (y.className.indexOf('w3-show') == -1) {
    y.className += ' w3-show';
  } else {
    y.className = y.className.replace(' w3-show', '');
  }
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == document.getElementById('menuOverlay')) {
    openMenu();
  }
};

// ****************** spaceit.js ******************

const spaceIt = (() => {
  let jwt = '';

  let user = null;

  const env = '';

  const spacesPagesURL = 'w3spaces';

  const spacesApiUrl = `https://tryit-api${env}.w3schools.com/tryit`;

  const spacesUrl = `https://spaces${env}.w3schools.com`;
  const billingURL = `https://billing${env}.w3schools.com`;
  const profileURL = `https://profile${env}.w3schools.com`;
  const redirectURL = encodeURIComponent(`https://${location.host + location.pathname + location.search}`);

  const init = () => {
    const code = window.localStorage.getItem('spaceItCode');
    if (location.hash === '#login' && code && code.length) {
      document.getElementById('textareaCode').value = window.localStorage.getItem('spaceItCode');
      window.editor.getDoc().setValue(window.localStorage.getItem('spaceItCode'));
      window.localStorage.removeItem('spaceItCode');
      showDialog();
    }
  };

  const getCookie = (name) => {
    const v = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return v ? v[2] : null;
  };

  const accessTokenOK = () => {
    const accessToken = getCookie('accessToken');

    if (accessToken && (Date.now() < (JSON.parse(atob(accessToken.split('.')[1])).exp * 1000))) {
      jwt = accessToken;
      return true;
    }

    jwt = '';
    return false;
  };

  const createCallbackSelfExecutedWithDelay = (callback, delay) => {
    /*
      Origin/Inspiration: https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits#hitcallback
      Main purpose of this function is to return a callback function to be executed in some place .. and if the
      execution will not take place there for some reason/error -> still execute it with a delay
    */

    if (typeof delay === 'undefined') {
      delay = 1000; // defaults to 1 second
    }

    let called = false;

    function callbackWrapper() {
      if (!called) {
        called = true;
        callback();
      }
    }

    setTimeout(callbackWrapper, delay);

    return callbackWrapper;
  };

  const login = () => {
    ga('send', 'event', 'spacesFromTryit', 'saveLogin', {
      hitCallback: createCallbackSelfExecutedWithDelay(() => {
        location.href = `${profileURL}/?redirect_url=${redirectURL}%23login`;
      }),
    });
  };

  const signup = () => {
    ga('send', 'event', 'spacesFromTryit', 'saveSignup', {
      hitCallback: createCallbackSelfExecutedWithDelay(() => {
        location.href = `${profileURL}/sign-up?redirect_url=${redirectURL}%23login`;
      }),
    });
  };

  const fetchUser = async () => {
    user = await fetch(
      `${spacesApiUrl}/user`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        credentials: 'include',
      },
    )
      .then((response) => response.json());
    // console.log(user);
  };

  const checkSpaceAvailability = async (id) => {
    const response = await fetch(
      `${spacesApiUrl}/availability/space/${id}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        credentials: 'include',
      },
    )
      .then((response) => response.json());
    // console.log(response);
  };

  const getSpaceIdValidationError = (id) => {
    if (id.length < 4) {
      return 'The name must be at least 4 characters.';
    } if (id.length > 20) {
      return 'The name cannot be more than 20 characters.';
    } if (!/^[a-z]/.test(id)) {
      return 'The name must start with a lower case letter.';
    } if (!/^[a-z\-0-9]*$/.test(id)) {
      return 'The name can only contain lower case letters, numbers and dashes.';
    }

    return undefined;
  };

  const registerSpace = async (id) => {
    const validation = getSpaceIdValidationError(id);
    if (validation) {
      document.getElementById('spaceit-modal-input-group--validation-error').innerHTML = validation;
      return;
    }

    try {
      showLoading('We are creating your space...');

      const response = await fetch(
        `${spacesApiUrl}/register/space/${id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
          body: JSON.stringify({}),
          credentials: 'include',
        },
      )
        .then((response) => response.json());
      // console.log(response);

      if (response.error && response.error.code !== '0' && response.error.description) {
        showSpaceRegistration();
        document.getElementById('spaceItSpaceName').value = id;
        document.getElementById('spaceit-modal-input-group--validation-error').innerHTML = response.error.description;
      } else if (response.error.code === '0' && id) {
        user.data.spaces.push(id);
        showSaveCode();
        document.getElementById('spaceItSelectedFilename').value = `saved-from-Tryit-${(new Date().toJSON()).split('T')[0]}`;
      }
    } catch (error) {
      console.log(error.message);
      showSpaceRegistration();
      document.getElementById('spaceItSpaceName').value = id;
    }
  };

  const saveCode = async () => {
    if (window.editor) {
      window.editor.save();
    }

    const code = document.getElementById('textareaCode').value;

    const spaceId = document.getElementById('spaceItSelectedSpace').options[document.getElementById('spaceItSelectedSpace').selectedIndex].text;
    const filename = document.getElementById('spaceItSelectedFilename').value.replace(/\.[^/.]+$/, '');

    try {
      showLoading('We are saving your code...');
      const response = await fetch(
        `${spacesApiUrl}/code`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
          body: JSON.stringify({
            space: spaceId,
            name: filename,
            format: 'html',
            code,
          }),
          credentials: 'include',
        },
      )
        .then((response) => response.json());

      // console.log(response);

      if (response.error && response.error.code === '0' && response.data.file.rel_path) {
        showSaveSuccess(spaceId, response.data.file.rel_path);
      } else if (response.error.code && response.error.code !== '0') {
        throw new Error(response.error.description || 'Something bad happened. Check your code.');
      }
    } catch (error) {
      console.log(error.message);
      showSaveCode();
      document.getElementById('spaceItSelectedFilename').value = filename;
      document.getElementById('spaceit-modal-input-group-error').innerHTML = error.message;
    }
  };

  const showLoading = (text) => {
    const modalContainer = document.getElementById('spaceItModalContainer');
    modalContainer.innerHTML = '';

    const html = `
      <div id="spaceItLoadingContainer">
        <h1 class="spaceit-loader-text">Please wait...</h1>
        <div id="spaceItLoader" class="spaceit-loader-container">
          <img class="spaceit-loader" src="/images/spinner.svg">
        </div>
        <p class="spaceit-loader-text">${text}</p>
      </div>
    `;

    modalContainer.insertAdjacentHTML('beforeend', html);
  };

  const showLogin = () => {
    const modalContainer = document.getElementById('spaceItModalContainer');
    modalContainer.innerHTML = '';

    const html = `
      <div id="spaceItLoginContainer">
        <div class="spaceit-modal-login-image-container">
          <img class="spaceit-modal-login-image" src="/images/illustration.png">
        </div>
        <div class="spaceit-modal-login-header">
          <img src="/images/new-label.svg">
          <h1>Save your code to<br class="w3-hide-large w3-hide-medium"> W3Schools Spaces</h1>
        </div>
        <div>
        <p>Log in or sign up for free to save your code now.</p>
        <p class="w3-hide-small">Spaces is a personal place where you can create your own web pages; save your code and share it with others.
        <div class="spaceit-modal-button-bar">
          <a href="javascript:void(0);" id="spaceItLoginButton" class="spaceit-modal-button-secondary" onclick="spaceIt.login()">Log in</a>  
          <a href="javascript:void(0);" id="spaceItSignButton" class="spaceit-modal-button-primary" onclick="spaceIt.signup()">Sign up for free</a>
        </div>
      </div>
    `;

    modalContainer.insertAdjacentHTML('beforeend', html);
  };

  const showSpaceRegistration = () => {
    const modalContainer = document.getElementById('spaceItModalContainer');
    modalContainer.innerHTML = '';

    const html = `
      <div id="spaceItRegisterContainer">
        <h1>Create a space</h1>
        <p>To save code snippets you need a space first. What do you want to call this space?</p>
        <div class="w3-margin-bottom">
          <br>
          <form>
            <div class="spaceit-modal-input-group w3-margin-bottom">
              <input id="spaceItSpaceName" class="spaceit-modal-input" required placeholder="Enter a name for your space" minlength="4" maxlength="20"> 
              <div class="spaceit-modal-input-group-append"><span class="spaceit-modal-input-group-text">.w3spaces.com</span></div>
            </div>
            <small class="spaceit-modal-input-validation-error"><div id="spaceit-modal-input-group--validation-error"></div></small>
          </form>
          <p>This will also be the public url for your space.</p>
        </div>
        <div class="spaceit-modal-button-bar">
          <a href="javascript:void(0);" id="spaceItCancelButton" class="spaceit-modal-button-secondary" onclick="spaceIt.closeDialog();">Cancel</a>
          <a href="javascript:void(0);" id="spaceItRegisterButton" class="spaceit-modal-button-primary" onclick="spaceIt.registerSpace(document.getElementById('spaceItSpaceName').value);">Create a space</a>
        </div>

      </div>
    `;

    modalContainer.insertAdjacentHTML('beforeend', html);
  };

  const checkFilename = () => {
    const filename = document.getElementById('spaceItSelectedFilename').value;
    if (filename.length >= 1) {
      document.getElementById('spaceItSaveButton').classList.remove('spaceit-modal-button-disabled');
    } else {
      document.getElementById('spaceItSaveButton').classList.add('spaceit-modal-button-disabled');
    }
  };

  const showSaveCode = () => {
    const modalContainer = document.getElementById('spaceItModalContainer');
    modalContainer.innerHTML = '';

    const html = `
      <div id="spaceItSaveContainer">
        <h1>${user.data.spaces.length <= 1 ? 'Save your code to W3Schools Spaces?' : 'Save your code to W3Schools Spaces?'}</h1>
        <div class="spaceit-modal-margin-top w3-margin-bottom">
          Your space
          <select id="spaceItSelectedSpace" class="minimal w3-margin-bottom" style="margin-bottom: 10px;"></select>
          Name your file
          <br>
          <div class="spaceit-modal-input-group w3-margin-bottom">
            <input id="spaceItSelectedFilename" class="spaceit-modal-input" onkeyup="spaceIt.checkFilename()" required maxlength="40"> 
            <div class="spaceit-modal-input-group-append"><span class="spaceit-modal-input-group-text">.html</span></div>
          </div>
          <small class="spaceit-modal-input-validation-error"><div id="spaceit-modal-input-group-error"></div></small>
        </div>
        <div class="spaceit-modal-button-bar">
          <a href="javascript:void(0);" id="spaceItCancelButton" class="spaceit-modal-button-secondary" onclick="spaceIt.closeDialog();">Cancel</a>
          <a href="javascript:void(0);" id="spaceItSaveButton" class="spaceit-modal-button-primary" onclick="spaceIt.saveCode();">Save code snippet</a>
        </div>
      </div>
    `;

    modalContainer.insertAdjacentHTML('beforeend', html);

    // document.getElementById('spaceItSaveButton').classList.add("spaceit-modal-button-disabled");

    document.getElementById('spaceItSelectedSpace').innerText = null;

    user.data.spaces.sort((a, b) => a.localeCompare(b));

    for (const s of user.data.spaces) {
      const opt = document.createElement('option');
      opt.value = s;
      opt.innerHTML = s;
      document.getElementById('spaceItSelectedSpace').appendChild(opt);
    }
  };

  const showSaveSuccess = (spaceId, filename) => {
    const modalContainer = document.getElementById('spaceItModalContainer');
    modalContainer.innerHTML = '';

    const html = `
      <div id="spaceItSaveSuccessContainer">
        <div class="spaceit-modal-success-button">
          <img class="spaceit-modal-success-img" src="/images/spaceit_success.svg">
        </div>
        <h1 class="spaceit-modal-success-header">Code snippet saved!</h1>
        <p class="spaceit-modal-success-text" style="text-align:center">You will find this code snippet at<br><a style="color: #282A35" href="https://${spaceId}.${spacesPagesURL}.com/${filename}" target="_blank"><b>https://${spaceId}.${spacesPagesURL}.com/${filename}</b></a></p>
        <div class="spaceit-modal-success-button">
          <a href="${spacesUrl}/space/${spaceId}" target="_blank" id="spaceItViewButton" class="spaceit-modal-button-secondary">View file in Spaces<img class="spaceit-success-button-icon" src="/images/export.svg"></a>
        </div>
        <div class="tooltip spaceit-modal-success-button">
          <br>
        </div>
      </div>
    `;

    modalContainer.insertAdjacentHTML('beforeend', html);
  };

  const showOutOfQuota = () => {
    const modalContainer = document.getElementById('spaceItModalContainer');
    modalContainer.innerHTML = '';

    const html = `
      <div id="spaceItSaveSuccessContainer">
        <h1 class="spaceit-modal-success-header">You are out of quota!</h1>
        <p class="spaceit-modal-success-text">Your space got closed temporarily, since you already used this month's included quota. Your space will be opened again when your next subscription period starts.</p>
        <p class="spaceit-modal-success-text">Want more quota - and get your space opened right away? Then upgrade to a bigger plan that includes more quota.</p>
        <div class="spaceit-modal-success-button">
          <a href="${billingURL}" target="_blank" id="spaceItViewButton" class="spaceit-modal-button-secondary">Upgrade to a bigger plan</a>
        </div>
      </div>
    `;

    modalContainer.insertAdjacentHTML('beforeend', html);
  };

  const showError = () => {
    const modalContainer = document.getElementById('spaceItModalContainer');
    modalContainer.innerHTML = '';

    const html = `
      <div id="spaceItErrorContainer">
        <h1 class="spaceit-modal-success-header">Something bad happened!</h1>
        <p class="spaceit-modal-success-text">An error occured while processing your request.</p>
        <p class="spaceit-modal-success-text">If the problem persists please contact support.</p>
      </div>
    `;

    modalContainer.insertAdjacentHTML('beforeend', html);
  };

  const showDialog = async () => {
    ga('send', 'event', 'spacesFromTryit', 'save');

    if (window.editor) {
      window.editor.save();
    }

    if (!document.getElementById('textareaCode').value.length) {
      return;
    }

    if (!document.getElementById('spaceItModal')) {
      const body = document.querySelector('body');

      const modal = `
          <div id="spaceItModal" class="w3-modal">
            <div id="spaceItModalParentContainer" class="w3-modal-content spaceit-modal">
              <div id="spaceItModalCloseButton" class="spaceit-modal-close-button">
                <a href="javascript:void(0);" onclick="spaceIt.closeDialog();"><img src="/images/close-icon-tryit.svg"></img></a>
              </div>
              <div id="spaceItModalContainer" class="spaceit-modal-container"></div>
            </div>
          </div>
        `;

      body.insertAdjacentHTML('beforeend', modal);
    }

    document.getElementById('spaceItModal').style.display = 'block';

    document.getElementById('spaceItModal').addEventListener('mousedown', clickDownOutsideModal);
    document.getElementById('spaceItModal').addEventListener('mouseup', clickUpOutsideModal);
    document.getElementById('spaceItModal').addEventListener('touchstart', clickDownOutsideModal);
    document.getElementById('spaceItModal').addEventListener('touchend', clickUpOutsideModal);

    let closeModalOK = false;
    function clickDownOutsideModal(event) {
      if (event.target.id == 'spaceItModal') {
        closeModalOK = true;
      } else {
        closeModalOK = false;
      }
    }

    function clickUpOutsideModal(event) {
      if (event.target.id == 'spaceItModal' && closeModalOK) {
        spaceIt.closeDialog();
      }
    }

    if (accessTokenOK()) {
      showLoading('We are loading your information...');

      await fetchUser();

      if (user.error && user.error.code == '1') {
        showError();
        return;
      }

      if (user.data.spaces && user.data.spaces.length) {
        showSaveCode();
        document.getElementById('spaceItSelectedFilename').value = `saved-from-Tryit-${(new Date().toJSON()).split('T')[0]}`;
      } else if (user.data.out_of_quota) {
        showOutOfQuota();
      } else {
        showSpaceRegistration();
      }
    } else {
      if (window.editor) {
        window.editor.save();
      }

      if (document.getElementById('textareaCode').value.length) {
        window.localStorage.setItem('spaceItCode', document.getElementById('textareaCode').value);
      }

      showLogin();
    }
  };

  const closeDialog = () => {
    document.getElementById('spaceItModal').style.setProperty('display', 'none', 'important');
  };

  return {
    init,
    showDialog,
    closeDialog,
    login,
    signup,
    registerSpace,
    saveCode,
    checkFilename,
  };
})();

window.onhashchange = spaceIt.init;

spaceIt.init();
