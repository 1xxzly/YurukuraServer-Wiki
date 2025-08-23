// featuresページ「経済の概念」ボタンにホバーでbook.png＋テキスト表示
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('economy-btn');
  var wrap = document.getElementById('book-popup-wrap');
  if (btn && wrap) {
    btn.addEventListener('mouseenter', function() {
      wrap.style.display = 'block';
    });
    btn.addEventListener('mouseleave', function() {
      wrap.style.display = 'none';
    });
  }
});
// contactページでbodyにcontact-pageクラスを自動付与
document.addEventListener('DOMContentLoaded', function() {
  if (location.pathname.match(/\/contact(\/|\.html)?$/)) {
    document.body.classList.add('contact-page');
  }
});
// newsページでbodyにnews-pageクラスを自動付与
document.addEventListener('DOMContentLoaded', function() {
  if (location.pathname.match(/\/news(\/|\.html)?$/)) {
    document.body.classList.add('news-page');
  }
});
// 背景GIFの表示・非表示を切り替えるスクリプト
window.addEventListener('DOMContentLoaded', function() {
  const gif = document.getElementById('bgGif');
  const btn = document.getElementById('toggleBgGif');
  if (!gif || !btn) return;
  let isVisible = true;
  btn.onclick = function() {
    if (isVisible) {
      gif.style.display = 'none';
      btn.textContent = '背景の動きを再開';
      isVisible = false;
    } else {
      gif.style.display = '';
      btn.textContent = '背景の動きを一時停止';
      isVisible = true;
    }
  };
});

// BGMの音量・ON/OFF制御（全ページ共通UI用）
document.addEventListener('DOMContentLoaded', function() {
  var bgm = document.getElementById('bgm');
  if (bgm) {
    bgm.volume = 0.025;
  }
  var btn = document.getElementById('bgm-toggle');
  if (bgm && btn) {
    btn.onclick = function() {
      if (bgm.muted) {
        bgm.muted = false;
        btn.textContent = 'BGM OFF';
      } else {
        bgm.muted = true;
        btn.textContent = 'BGM ON';
      }
    };
  }
  var volDown = document.getElementById('bgm-vol-down');
  var volUp = document.getElementById('bgm-vol-up');
  var volLabel = document.getElementById('bgm-vol-label');
  if (bgm && volDown && volUp && volLabel) {
    function updateLabel() {
      volLabel.textContent = '音量 ' + Math.round(bgm.volume * 100) + '%';
    }
    updateLabel();
    volDown.onclick = function() {
      bgm.volume = Math.max(0, bgm.volume - 0.05);
      updateLabel();
    };
    volUp.onclick = function() {
      bgm.volume = Math.min(1, bgm.volume + 0.05);
      updateLabel();
    };
  }
});