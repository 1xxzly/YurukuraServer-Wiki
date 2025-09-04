// ホーム画面の背景画像（#bgImage）を5つの画像からランダムで表示
document.addEventListener('DOMContentLoaded', function() {
  if (document.body.classList.contains('index-page')) {
    var images = [
      'wallpaper_minecraft_burberry_2560x1440.png',
      'wallpaper_minecraft_15th-anniversary_1920x1080.png',
      'wallpaper_minecraft_buzzybees_2560x1440.png',
      'minecraft_ocean_world.png'
    ];
    var img = images[Math.floor(Math.random() * images.length)];
    var bg = document.getElementById('bgImage');
    if(bg) {
      bg.src = img;
      console.log('背景画像(src):', img);
    }
  }
});
// ホーム画面の背景画像を5つの画像からランダムで表示（絶対パス＆デバッグ用console出力付き）
document.addEventListener('DOMContentLoaded', function() {
  if (document.body.classList.contains('index-page')) {
    var images = [
      '/wallpaper_minecraft_burberry_2560x1440.png',
      '/wallpaper_minecraft_15th-anniversary_1920x1080.png',
      '/wallpaper_minecraft_buzzybees_2560x1440.png'
    ];
    var img = images[Math.floor(Math.random() * images.length)];
    console.log('背景画像:', img);
    document.body.style.backgroundImage = 'url(' + img + ')';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
  }
});
// devilfruitページ全体表示/非表示切り替え（document全体でクリック監視）
function devilfruitToggleHandler(e) {
  var btn = document.getElementById('toggle-all-btn');
  var content = document.getElementById('devilfruit-content');
  if (!btn || !content) return;
  if (e.target === btn) {
    if (content.style.display === 'none') {
      content.style.display = 'block';
      btn.textContent = '全ての文字を非表示';
    } else {
      content.style.display = 'none';
      btn.textContent = '全ての文字を表示';
    }
  }
}
document.addEventListener('click', devilfruitToggleHandler, true);
// devilfruitページでbodyにdevilfruit-pageクラスを自動付与（ローカル・公開どちらでも対応）
document.addEventListener('DOMContentLoaded', function() {
  if (location.pathname.includes('devilfruit')) {
    document.body.classList.add('devilfruit-page');
  }
});
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
    bgm.volume = 0.075;
    // 初期状態：BGM ON（再生）
    bgm.muted = false;
    // 自動再生がブロックされている場合は、ユーザー操作で再生
    if (typeof bgm.play === 'function') {
      try { bgm.play(); } catch(e) {}
    }
  }
  var btn = document.getElementById('bgm-toggle');
  if (bgm && btn) {
    // 初期表示を必ずBGM ONに
    btn.textContent = 'BGM ON';
    btn.onclick = function() {
      if (bgm.muted) {
        // ON表示→再生
        bgm.muted = false;
        if (typeof bgm.play === 'function') {
          try { bgm.play(); } catch(e) {}
        }
        btn.textContent = 'BGM ON';
      } else {
        // OFF表示→ミュート
        bgm.muted = true;
        btn.textContent = 'BGM OFF';
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