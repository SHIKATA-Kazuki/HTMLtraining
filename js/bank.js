export const BANKS = {
  'mc7': {
    label: 'Minecraft#07',
    items: [
      {
        ja: 'モニター',
        en: 'monitor',
        hint: 'm○○○○○r',
        exp: {
          morphemes: [
            { text: 'mon', meaning: '警告する・注意する' },
            { text: 'itor', meaning: '～するもの・人' },
          ],
          etymology: 'ラテン語で「警告する・見守る」が語源です。もともとは「監視するもの」という意味で、現在では画面や監視装置を monitor と呼びます。',
          code: `const monitor = peripheral.find("monitor");`,
          memo: '「モニタリング（monitoring）」と同じ単語です。'
        }
      },
      {
        ja: '上',
        en: 'top',
        hint: 'to○',
        exp: {
          morphemes: [
            { text: 'top', meaning: '頂上・一番上' },
          ],
          etymology: '一番高い場所を表す基本単語です。CSSでは top:0 のように上端からの距離を指定します。',
          code: `div {\n  top: 0;\n}`,
          memo: '「トップ選手」の top と同じ意味です。'
        }
      },
      {
        ja: '右',
        en: 'right',
        hint: 'r○○○○',
        exp: {
          morphemes: [
            { text: 'right', meaning: '右・正しい' },
          ],
          etymology: '古英語では「まっすぐ・正しい」という意味があり、そこから右方向も表すようになりました。',
          code: `div {\n  right: 20px;\n}`,
          memo: 'right は「右」と「正しい」の両方の意味があります。'
        }
      },
      {
        ja: '左',
        en: 'left',
        hint: 'l○○○',
        exp: {
          morphemes: [
            { text: 'left', meaning: '左' },
          ],
          etymology: '古英語から続く基本単語で、「左側」を意味します。',
          code: `div {\n  left: 20px;\n}`,
          memo: 'right（右）とセットで覚えましょう。'
        }
      },
      {
        ja: 'クリア/消去する',
        en: 'clear',
        hint: 'cl○○○',
        exp: {
          morphemes: [
            { text: 'clear', meaning: '澄んだ・取り除く' },
          ],
          etymology: '「濁りがなくなる」がもとの意味です。そこから「消去する」「片付ける」という意味でも使われます。',
          code: `term.clear();`,
          memo: 'ゲームの「クリア」と同じ単語です。'
        }
      },
      {
        ja: '真',
        en: 'true',
        hint: 'tru○',
        exp: {
          morphemes: [
            { text: 'true', meaning: '真実・正しい' },
          ],
          etymology: '「本当である」という意味です。プログラミングでは「条件が成り立つ」ことを表します。',
          code: `if (true) {\n  console.log("OK");\n}`,
          memo: 'true と false は必ずセットで覚えましょう。'
        }
      },
      {
        ja: '偽',
        en: 'false',
        hint: 'fal○○',
        exp: {
          morphemes: [
            { text: 'false', meaning: '誤った・偽の' },
          ],
          etymology: '「真実ではない」がもとの意味です。プログラミングでは「条件が成り立たない」ことを表します。',
          code: `let flag = false;`,
          memo: 'false は「ウソ・偽物」の意味でも使われます。'
        }
      },
      {
        ja: '行',
        en: 'line',
        hint: 'ライン',
        exp: {
          morphemes: [
            { text: 'line', meaning: '線' },
          ],
          etymology: '一本の線が語源です。文字が横一列に並ぶことから「行」という意味でも使われます。',
          code: `term.setCursorPos(1, line);`,
          memo: 'LINE（ライン）という言葉でもおなじみです。'
        }
      },
      {
        ja: '時間',
        en: 'time',
        hint: 't○○e',
        exp: {
          morphemes: [
            { text: 'time', meaning: '時間' },
          ],
          etymology: '古英語から使われている基本単語で、「時間」「時刻」を意味します。',
          code: `local time = os.time()`,
          memo: 'タイム(time)はスポーツでもよく使われています。'
        }
      },
      {
        ja: '書きこむ',
        en: 'write',
        hint: 'w○○○e',
        exp: {
          morphemes: [
            { text: 'write', meaning: '書く' },
          ],
          etymology: '古英語から続く基本単語です。プログラミングでは画面やファイルへ文字を書き込む意味で使われます。',
          code: `term.write("Hello")`,
          memo: 'writer（作家）も同じ語源です。'
        }
      },
      {
        ja: '待つ',
        en: 'sleep',
        hint: 'sl○○p',
        exp: {
          morphemes: [
            { text: 'sleep', meaning: '眠る' },
          ],
          etymology: '本来は「眠る」という意味です。プログラミングでは処理を一定時間休ませることを表します。',
          code: `sleep(1)`,
          memo: '「コンピュータを眠らせる」イメージです。'
        }
      },
      {
        ja: '終わる',
        en: 'end',
        hint: 'e○○',
        exp: {
          morphemes: [
            { text: 'end', meaning: '終わり' },
          ],
          etymology: '物事の最後を表す基本単語です。',
          code: `end`,
          memo: 'start の反対です。'
        }
      },
      {
        ja: '行う',
        en: 'do',
        hint: '○o',
        exp: {
          morphemes: [
            { text: 'do', meaning: 'する' },
          ],
          etymology: '英語でも最も基本的な動詞の一つです。',
          code: `do\n  ...\nend`,
          memo: '「Do your best.」の do と同じです。'
        }
      },
      {
        ja: '～の間',
        en: 'while',
        hint: 'whi○o',
        exp: {
          morphemes: [
            { text: 'while', meaning: '〜の間' },
          ],
          etymology: 'ある状態が続く間を表します。プログラムでは条件が成り立つ間繰り返します。',
          code: `while true do\n  ...\nend`,
          memo: 'while = 「〜している間ずっと」'
        }
      },
      {
        ja: '周辺【難】',
        en: 'peripheral',
        hint: 'peri○○○○○l',
        exp: {
          morphemes: [
            { text: 'peri', meaning: '周り' },
            { text: 'pher', meaning: '運ぶ' },
            { text: 'al', meaning: '〜に関する' },
          ],
          etymology: '「周囲にあるもの」が語源です。ComputerCraftでは周辺機器を peripheral と呼びます。',
          code: `peripheral.find("monitor")`,
          memo: '「ペリフェラル機器」という言葉でも使われます。'
        }
      },
      {
        ja: '形式',
        en: 'format',
        hint: 'for○○○',
        exp: {
          morphemes: [
            { text: 'form', meaning: '形' },
            { text: 'at', meaning: '〜にする' },
          ],
          etymology: '「形を整える」がもとの意味です。',
          code: `textutils.formatTime(time)`,
          memo: 'フォーマット(format)とそのまま覚えてもよいですし、スポーツなどをやっていると特定の動きを意味するフォーム(form)、陣形を意味するフォーメーション(formation)といった言葉が登場しますが、どれも「形」に関する言葉です。'
        }
      },
      {
        ja: '文字',
        en: 'text',
        hint: 'te○○',
        exp: {
          morphemes: [
            { text: 'text', meaning: '文章・文字列' },
          ],
          etymology: '本文や文章を表す単語です。',
          code: `local text = "Hello"`,
          memo: 'textbook の text と同じです。'
        }
      },
      {
        ja: '設定する',
        en: 'set',
        hint: 's○○',
        exp: {
          morphemes: [
            { text: 'set', meaning: '置く・設定する' },
          ],
          etymology: '「置く」が元の意味で、プログラムでは値を設定することを表します。',
          code: `term.setCursorPos(1,1)`,
          memo: 'セット(set)する、と日常でも使います。'
        }
      },
      {
        ja: '色',
        en: 'color',
        hint: 'col○○',
        exp: {
          morphemes: [
            { text: 'color', meaning: '色' },
          ],
          etymology: 'ラテン語で「色」が語源です。',
          code: `term.setTextColor(colors.red)`,
          memo: 'カラフル(colorful)と同じ語です。'
        }
      },
      {
        ja: '日',
        en: 'day',
        hint: 'd○○',
        exp: {
          morphemes: [
            { text: 'day', meaning: '日' },
          ],
          etymology: '一日を表す基本単語です。',
          code: `local day = os.day()`,
          memo: 'today の day です。'
        }
      },
      {
        ja: '読み込む',
        en: 'load',
        hint: 'l○○○',
        exp: {
          morphemes: [
            { text: 'load', meaning: '積み込む' },
          ],
          etymology: '荷物を積み込む意味から、データをメモリへ読み込む意味になりました。',
          code: `load(data)`,
          memo: 'ゲームのロード画面(loading...)と同じです。'
        }
      },
      {
        ja: 'タッチパネル',
        en: 'touchpanel',
        hint: 't○○○○p○○○○',
        exp: {
          morphemes: [
            { text: 'touch', meaning: '触れる' },
            { text: 'panel', meaning: '操作盤・板' },
          ],
          etymology: '「触れる操作盤」という意味です。',
          code: `touchpanel.touch()`,
          memo: 'touch と panel の組み合わせです。'
        }
      },
      {
        ja: 'ボタン',
        en: 'button',
        hint: 'b○○○on',
        exp: {
          morphemes: [
            { text: 'button', meaning: 'ボタン・留め具' },
          ],
          etymology: '服のボタンと同じ語です。',
          code: `button.click()`,
          memo: 'GUIでは押す部品を button と呼びます。'
        }
      },
      {
        ja: '作る',
        en: 'make',
        hint: 'm○○○',
        exp: {
          morphemes: [
            { text: 'make', meaning: '作る' },
          ],
          etymology: '何かを作る最も基本的な動詞です。',
          code: `makeWindow()`,
          memo: 'maker（メーカー）も同じ語です。'
        }
      },
      {
        ja: '描く/表示する',
        en: 'draw',
        hint: 'd○○○',
        exp: {
          morphemes: [
            { text: 'draw', meaning: '描く' },
          ],
          etymology: 'もとは「引く」という意味で、線を引くことから描く意味になりました。',
          code: `paintutils.drawLine(...)`,
          memo: 'draw = 絵を描くでも使います。'
        }
      },
      {
        ja: 'パネル',
        en: 'panel',
        hint: 'p○○○○',
        exp: {
          morphemes: [
            { text: 'panel', meaning: '板・表示板' },
          ],
          etymology: '平らな板を意味します。',
          code: `local panel = {}`,
          memo: 'ソーラーパネルも同じ panel です。'
        }
      },
      {
        ja: '実行する',
        en: 'run',
        hint: 'r○○',
        exp: {
          morphemes: [
            { text: 'run', meaning: '走る・動く' },
          ],
          etymology: 'プログラムが動き出すことを「走る(run)」と表現します。',
          code: `shell.run("program")`,
          memo: 'run = プログラムを動かす、という意味で非常によく使います。'
        }
      },
      {
        ja: '選択肢',
        en: 'option',
        hint: 'オプション',
        exp: {
          morphemes: [
            { text: 'opt', meaning: '選ぶ' },
            { text: 'ion', meaning: '名詞化' },
          ],
          etymology: '「選ぶこと」が語源で、選択肢や設定項目を表します。',
          code: `menu.option`,
          memo: 'オプション料金の option と同じです。'
        }
      },
      {
        ja: 'イベント',
        en: 'event',
        hint: 'e○○○○',
        exp: {
          morphemes: [
            { text: 'event', meaning: '出来事' },
          ],
          etymology: '起こった出来事を表します。プログラムではマウスクリックなどの出来事をイベントと呼びます。',
          code: `os.pullEvent()`,
          memo: '文化祭のイベントと同じ意味です。'
        }
      },
      {
        ja: '押し出す',
        en: 'push',
        hint: 'p○○○',
        exp: {
          morphemes: [
            { text: 'push', meaning: '押す' },
          ],
          etymology: '押すことが元の意味です。データ構造では値を追加する意味でも使います。',
          code: `table.insert(list, value)`,
          memo: 'プッシュ通知の push と同じです。'
        }
      },
      {
        ja: '影響',
        en: 'effect',
        hint: 'eff○○○',
        exp: {
          morphemes: [
            { text: 'ef(ex)', meaning: '外へ' },
            { text: 'fect', meaning: '作る' },
          ],
          etymology: '「外へ作り出された結果」がもとの意味です。',
          code: `soundEffect()`,
          memo: 'エフェクト(effect)というカタカナでも使います。'
        }
      },
      {
        ja: 'ドア',
        en: 'door',
        hint: 'd○○○',
        exp: {
          morphemes: [
            { text: 'door', meaning: 'ドア・扉' },
          ],
          etymology: '建物の出入口を表す基本単語です。',
          code: `door.open()`,
          memo: 'door は日本語でもそのまま使われます。'
        }
      },
      {
        ja: '連結',
        en: 'add',
        hint: 'a○○',
        exp: {
          morphemes: [
            { text: 'ad', meaning: '加える' },
          ],
          etymology: '何かを付け加えることを意味します。',
          code: `list:add(item)`,
          memo: 'addition（足し算）の add です。'
        }
      },
      {
        ja: '印/旗',
        en: 'flag',
        hint: 'f○○○',
        exp: {
          morphemes: [
            { text: 'flag', meaning: '旗・目印' },
          ],
          etymology: '目印となる旗が語源です。プログラムでは状態を示す変数を flag と呼びます。',
          code: `local flag = true`,
          memo: 'フラグを立てる、という言葉の由来です。'
        }
      },
      {
        ja: '名前',
        en: 'name',
        hint: 'n○○○',
        exp: {
          morphemes: [
            { text: 'name', meaning: '名前' },
          ],
          etymology: '人や物を区別するための呼び名です。',
          code: `player.getName()`,
          memo: 'nickname の name と同じです。'
        }
      },
      {
        ja: '秒',
        en: 'second',
        hint: 'seco○○',
        exp: {
          morphemes: [
            { text: 'sec', meaning: '次の' },
            { text: 'ond', meaning: '序数語尾' },
          ],
          etymology: 'ラテン語で「2番目」が語源です。かつての最小時間単位minute(分)は小さな区切りを意味していますが、それをさらに分けた「2番目の小さな区切り」として定義されたため second（秒）になりました。',
          code: `sleep(1) // 1 second`,
          memo: 'second には「2番目」という意味もあります。'
        }
      }
    ]
  },
  'easy': {
    label: 'まずはここから',
    items: [
      { ja: '背景',               en: 'background',
        hint: 'b○○○gr○○○d',
        exp: {
          morphemes: [
            { text: 'back',   meaning: '後ろ・裏' },
            { text: 'ground', meaning: '地面・土台' },
          ],
          etymology: '「後ろの地面」が転じて「背景・下地」の意味になりました。写真の背景や、物事の背景（事情）という使い方と同じです。',
          code: `/* CSSでの使い方 */\n.box {\n  background: #f0f0f0;        /* 色を指定 */\n  background: url(img.png);   /* 画像を指定 */\n}`,
          memo: '「バックグラウンドミュージック（BGM）」の"バックグラウンド"と同じ単語です！',
        }
      },
      { ja: 'フォント',           en: 'font',
        hint: 'f○○○',
        exp: {
          morphemes: [
            { text: 'font', meaning: '鋳造物・泉' },
          ],
          etymology: 'もともとは活版印刷の「鋳型で作った同じサイズ・書体の活字セット」のことです。現代では「文字のデザイン（書体）」全般を指します。',
          code: `/* CSSでの使い方 */\n.text {\n  font-family: 'Noto Sans JP', sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}`,
          memo: '「フォント」はよくカタカナで使われているので、英語と同じ感覚で覚えられます！',
        }
      },
      { ja: '大きさ、サイズ',      en: 'size',
        hint: 's○○○',
        exp: {
          morphemes: [
            { text: 'size', meaning: '大きさ・寸法' },
          ],
          etymology: '古フランス語の "sise"（固定された量）に由来します。CSSでは `font-size`（文字の大きさ）や `width`（幅）など「大きさを表す値」と一緒によく登場します。',
          code: `/* よく登場するパターン */\n.box {\n  font-size: 16px;    /* 文字の大きさ */\n  width: 200px;       /* 横幅 */\n  height: 100px;      /* 高さ */\n}`,
          memo: '「Lサイズ」「Mサイズ」のサイズ！日常でもよく使う単語です。',
        }
      },
{
  ja: '整列させる',
  en: 'align',
  hint: '○lign',
  exp: {
          morphemes: [
            { text: 'a',   meaning: '～へ,を表す接頭辞' },
            { text: 'lign', meaning: '=lin(線)' },
          ],
    etymology: '「線(line)に合わせる」がもともとの意味です。文字や画像を一直線にきれいに並べることを表します。',
    code: `/* 中央揃え */\n.text {\n  text-align: center;\n}`,
    memo: '「アラインメント(Alignment)」という言葉はゲームや機械でも「位置合わせ」の意味で使われます。'
  }
},
{
  ja: '行',
  en: 'line',
  hint: 'l○○○',
  exp: {
    etymology: '「一本の線」が元の意味です。文字が横に並んだ一本を「行(line)」と呼ぶようになりました。',
    code: `p {\n  line-height: 1.8;\n}`,
    memo: 'ライン(line)というカタカナでもよく使われています。'
  }
},
{
  ja: '外余白',
  en: 'margin',
  hint: 'mar○○○',
  exp: {
    etymology: '紙の「余白」や「のりしろ」が語源です。要素の外側に空けるスペースを表します。',
    code: `div {\n  margin: 20px;\n}`,
    memo: '「要素どうしの距離」を作るもの、と覚えると分かりやすいです。'
  }
},
{
  ja: '内余白',
  en: 'padding',
  hint: 'padd○○○',
  exp: {
    morphemes: [
      { text: 'pad',   meaning: 'パッド,余白を作る' },
      { text: 'ing', meaning: '動名詞' },
    ],
    etymology: 'pad は「クッション・詰め物」の意味です。アメフト選手が肩に付けている肩パッドなど日本語でもよく使われます。CSSでは中にクッションを入れるように、要素の内側に余白を作ります。',
    code: `button {\n  padding: 10px 20px;\n}`,
    memo: 'クッション(pad)を入れる＝内側に余裕を作る、と考えると覚えやすいです。'
  }
},
{
  ja: '配置',
  en: 'position',
  hint: 'po○○tion',
  exp: {
    morphemes: [
      { text: 'pos',   meaning: '置く' },
      { text: 'tion', meaning: '名詞化' },
    ],
    etymology: '「置かれた場所」がもともとの意味です。CSSでは要素をどこへ配置するかを指定します。',
    code: `div {\n  position: absolute;\n}`,
    memo: 'サッカーの「ポジション」と同じ単語です。'
  }
},
{
  ja: '文字',
  en: 'text',
  hint: 't○○○',
  exp: {
    etymology: 'もともとは「本文・文章」という意味です。文字そのものや文章全体を表します。',
    code: `p {\n  text-align: center;\n}`,
    memo: 'textbook（テキストブック＝教科書）の text と同じです。'
  }
},
{
  ja: '順',
  en: 'index',
  hint: '○○dex',
  exp: {
    etymology: '本の「索引」が語源です。番号を付けて順番を管理する意味になりました。',
    code: `div {\n  z-index: 10;\n}`,
    memo: '辞書の「索引(index)」と同じ単語です。'
  }
},
{
  ja: '幅',
  en: 'width',
  hint: 'wid○○',
  exp: {
    morphemes: [
      { text: 'wid(e)',   meaning: '広い' },
      { text: 'th', meaning: '程度を表す形容詞化' },
    ],
    etymology: 'wide（広い）に -th が付いて広さ、つまり「幅」を意味する名詞になりました。',
    code: `div {\n  width: 300px;\n}`,
    memo: 'wide → width の変化は long → length とセットで覚えましょう。'
  }
},
{
  ja: '長さ',
  en: 'length',
  hint: 'leng○○',
  exp: {
    morphemes: [
      { text: 'wid(e)',   meaning: '広い' },
      { text: 'th', meaning: '名詞化の接尾辞' },
    ],
    etymology: 'long（長い）からできた「長さ」という名詞です。',
    code: `const len = text.length;`,
    memo: 'JavaScriptでは文字数や配列の個数も length で表します。'
  }
},
{
  ja: '高さ',
  en: 'height',
  hint: 'hei○○○○',
  exp: {
    morphemes: [
      { text: 'high',   meaning: '高い' },
      { text: '-t', meaning: '名詞化の接尾辞' },
    ],
    etymology: 'high（高い）が変化して「高さ」という名詞になりました。',
    code: `div {\n  height: 100px;\n}`,
    memo: 'high → height は wide → width と同じ名詞化の仲間です。'
  }
},
{
  ja: '色',
  en: 'color',
  hint: 'col○○',
  exp: {
    etymology: 'ラテン語で「色」を意味する言葉が語源です。そのまま色を表します。',
    code: `p {\n  color: red;\n}`,
    memo: 'カラフル(colorful)の color と同じです。'
  }
},
{
  ja: '線、境界',
  en: 'border',
  hint: 'bor○○○',
  exp: {
    etymology: '国境や境界線を意味する言葉です。CSSでは要素を囲む線を表します。',
    code: `div {\n  border: 2px solid black;\n}`,
    memo: 'ボーダー(border)柄や国境(border)と同じ単語です。'
  }
},
{
  ja: '透明度',
  en: 'opacity',
  hint: 'opa○○○○',
  exp: {
    etymology: 'opaque（不透明）が語源です。CSSでは「どれだけ見えるか」を0〜1で指定します。',
    code: `img {\n  opacity: 0.5;\n}`,
    memo: '0で完全に透明、1で完全に見える、と覚えましょう。'
  }
},
{
  ja: '要素',
  en: 'item',
  hint: 'i○○○',
  exp: {
    etymology: '一覧の「一つ一つの項目」を意味します。HTMLやJavaScriptでは一つの要素を表す名前によく使われます。',
    code: `items.forEach(item => {\n  console.log(item);\n});`,
    memo: '買い物リストの「商品(item)」と同じ意味です。'
  }
}
]
  },
  'position': {
    label: '配置に関する単語',
    items: [
      { ja: '位置',              en: 'position',            hint: 'pos○○○○○○' },
      { ja: '中央',              en: 'center'  ,            hint: 'c○○t○○' },
      { ja: '右',                en: 'right'   ,            hint: 'r○○○○'  },
      { ja: '左',                en: 'left'    ,            hint: 'l○○○'   },
      { ja: 'フレックスボックス',           en: 'flexbox',         hint: 'f○○○b○○。HTMLの基本は要素を"箱"として捉えること.' },
    ]
  },
  'css-prop':{
    label: 'CSSプロパティ',
    items: [
      { ja: '背景色',               en: 'background-color',   hint: 'background-○○○○○' },
      { ja: '角丸',                 en: 'border-radius',       hint: 'border-○○○○○○' },
    //   { ja: '影',                   en: 'box-shadow',          hint: 'box-○○○○○○' },
      { ja: '表示方法',             en: 'display',             hint: 'dis○○○○○' },
      { ja: '並び方向（Flex）',     en: 'flex-direction',      hint: 'flex-○○○○○○○○○' },
      { ja: 'フォント名',           en: 'font-family',         hint: 'font-○○○○○○' },
      { ja: 'フォントサイズ',       en: 'font-size',           hint: 'font-○○○○' },
      { ja: 'フォントの太さ',       en: 'font-weight',         hint: 'font-○○○○○○' },
      { ja: '主軸の揃え方',         en: 'justify-content',     hint: 'justify-○○○○○○○' },
      { ja: '交差軸の揃え方',       en: 'align-items',         hint: 'align-○○○○○' },
      { ja: '行の高さ',             en: 'line-height',         hint: 'line-○○○○○○' },
      { ja: '外余白',               en: 'margin',              hint: 'mar○○○' },
      { ja: '内余白',               en: 'padding',             hint: 'pad○○○○○' },
      { ja: '配置方法',             en: 'position',            hint: 'pos○○○○○○' },
      { ja: '文字装飾',             en: 'text-decoration',     hint: 'text-○○○○○○○○○○' },
    //   { ja: 'アニメーション遷移',   en: 'transition',          hint: 'trans○○○○○○' },
    //   { ja: '変形',                 en: 'transform',           hint: 'trans○○○○○' },
      { ja: 'はみ出し処理',         en: 'overflow',            hint: 'over○○○○' },
    //   { ja: '重なり順',             en: 'z-index',             hint: 'z-○○○○○' },
      { ja: '幅',                   en: 'width',               hint: 'wi○○○' },
      { ja: '高さ',                 en: 'height',              hint: 'hei○○○○' },
      { ja: '文字色を指定するときのプロパティは？',  en: 'color', hint: 'col○○' },
      { ja: '枠線',                 en: 'border',              hint: '境界線、と言い換える。bor○○○' },
      { ja: '透明度',               en: 'opacity',             hint: 'opa○○○○' },
    //   { ja: 'カーソル形状',         en: 'cursor',              hint: 'cur○○○○' },
    ]
  },
  'selector': {
    label: 'セレクタ構文',
    items: [
      { ja: 'idを指定するとき',               en: '#',   hint: 'shiftキーを使わないといけないね' },
      { ja: 'クラスを指定するとき',                 en: '.',       hint: 'ピリオドを使うだけ' },
      { ja: '例えばbodyタグをdisplay:flex;のように指定するとき',   en: 'body{display:felx;}', hint: '改行・スペースなしで全て書いてね' },
    //   { ja: 'クラス選択',           en: '.class',              hint: '.cl○○○' },
    //   { ja: 'ID選択',               en: '#id',                 hint: '#i○' },
      { ja: 'ホバー時',             en: ':hover',              hint: ':ho○○○' },
      { ja: 'フォーカス時',         en: ':focus',              hint: ':fo○○○' },
      { ja: '最初の子要素',         en: ':first-child',        hint: ':first-○○○○○' },
      { ja: '最後の子要素',         en: ':last-child',         hint: ':last-○○○○○' },
    //   { ja: '直下の子',             en: '',             hint: '○' },
    //   { ja: '直後の兄弟',           en: '+',                   hint: '○' },
    //   { ja: '以降の兄弟',           en: '~',                   hint: '○' },
    //   { ja: '属性選択',             en: '[attr]',              hint: '[at○○]' },
    //   { ja: 'ルート要素',           en: ':root',               hint: ':ro○○' },
      { ja: '疑似要素・前',         en: '::before',            hint: '::be○○○○' },
      { ja: '疑似要素・後',         en: '::after',             hint: '::af○○○' },
    //   { ja: '否定',                 en: ':not()',              hint: ':no○()' },
    //   { ja: 'N番目の子',            en: ':nth-child()',        hint: ':nth-○○○○○()' },
    //   { ja: 'メディアクエリ',       en: '@media',              hint: '@me○○○' },
    //   { ja: 'キーフレーム定義',     en: '@keyframes',          hint: '@key○○○○○○' },
    //   { ja: '複数まとめて選択',     en: ':is()',               hint: ':i○()' },
    //   { ja: 'CSS変数定義',          en: '@layer',              hint: '@la○○○' },
    //   { ja: '全称選択',             en: '*',                   hint: '○' },
    ]
  },
  'html': {
    label: 'HTMLタグ※<>は省略する',
    items: [
    //   { ja: 'HTML宣言',             en: '!DOCTYPE html', hint: '<!DOC○○○○ html>' },
      { ja: 'ページ全体',           en: 'html',          hint: '<ht○○>' },
      { ja: 'メタ情報エリア',       en: 'head',          hint: '<he○○>' },
    //   { ja: '文字コード指定',       en: 'meta charset',  hint: '<meta ch○○○○○>' },
      { ja: 'CSS読み込み',          en: 'link',          hint: '<li○○>' },
      { ja: 'ページ本文',           en: 'body',          hint: '<bo○○>' },
      { ja: 'ヘッダー',             en: 'header',        hint: '<hea○○○>' },
      { ja: 'ナビゲーション',       en: 'nav',           hint: '<na○>' },
      { ja: 'メインコンテンツ',     en: 'main',          hint: '<ma○○>' },
      { ja: 'セクション',           en: 'section',       hint: '<sec○○○○>' },
      { ja: '記事',                 en: 'article',       hint: '<art○○○○>' },
      { ja: 'フッター',             en: 'footer',        hint: '<foo○○○>' },
      { ja: 'ボタン',               en: 'button',        hint: '<but○○○>' },
      { ja: '入力欄',               en: 'input',         hint: '<in○○○>' },
      { ja: 'ラベル',               en: 'label',         hint: '<lab○○>' },
      { ja: '画像',                 en: 'img',           hint: '<im○>' },
      { ja: '見出し1',              en: 'h1',            hint: '<h○>' },
      { ja: '段落',                 en: 'p',             hint: '<○>' },
      { ja: '番号なしリスト',       en: 'ul',            hint: '<u○>' },
      { ja: 'リスト項目',           en: 'li',            hint: '<l○>' },
      { ja: 'リンク',               en: 'a',             hint: '<○>' },
      { ja: '汎用ブロック',         en: 'div',           hint: '<di○>' },
      { ja: '汎用インライン',       en: 'span',          hint: '<sp○○>' },
      { ja: 'テーブル',             en: 'table',         hint: '<tab○○>' },
      { ja: 'フォーム',             en: 'form',          hint: '<fo○○>' },
    ]
  },
  'css-val': {
    label: 'CSS値・単位',
    items: [
      { ja: '先頭揃え（Flex）',     en: 'flex-start',          hint: 'flex-○○○○○' },
      { ja: '均等配置',             en: 'space-between',       hint: 'space-○○○○○○○' },
      { ja: 'ボックスサイジング',   en: 'border-box',          hint: 'border-○○○' },
      { ja: '透明',                 en: 'transparent',         hint: 'trans○○○○○○○' },
      { ja: '親から引き継ぐ',       en: 'inherit',             hint: 'in○○○○○' },
      { ja: '絶対配置',             en: 'absolute',            hint: 'abs○○○○○○' },
      { ja: '相対配置',             en: 'relative',            hint: 'rel○○○○○○' },
    //   { ja: '半透明の黒',           en: 'rgba(0,0,0,0.5)',     hint: 'rgba(○,○,○,○.○)' },
    //   { ja: '計算式',               en: 'calc()',              hint: 'cal○()' },
    //   { ja: 'CSS変数参照',          en: 'var()',               hint: 'va○()' },
    //   { ja: '線形グラデーション',   en: 'linear-gradient()',   hint: 'linear-○○○○○○○○○()' },
      { ja: 'なし',                 en: 'none',                hint: 'no○○' },
      { ja: '自動',                 en: 'auto',                hint: 'au○○' },
    //   { ja: '優先度最大',           en: '!important',          hint: '!im○○○○○○○' },
      { ja: 'コンテンツ幅に合わせる', en: 'max-content',       hint: 'max-○○○○○○○' },
      { ja: 'ビューポート幅',       en: 'vw',                  hint: 'v○' },
      { ja: 'ビューポート高さ',     en: 'vh',                  hint: 'v○' },
      { ja: 'フォントサイズ基準',   en: 'em',                  hint: '○○' },
      { ja: 'ルートフォント基準',   en: 'rem',                 hint: 'r○○' },
      { ja: 'グリッド均等割',       en: 'fr',                  hint: '○○' },
    ]
  },

  'test': {
    label: '試用',
    items: [
      {
        ja: 'モニター',
        en: 'monitor',
        hint: 'm○○○○○r',
        exp: {
          morphemes: [
            { text: 'mon', meaning: '警告する・注意する' },
            { text: 'itor', meaning: '～するもの・人' },
          ],
          etymology: 'ラテン語で「警告する・見守る」が語源です。もともとは「監視するもの」という意味で、現在では画面や監視装置を monitor と呼びます。',
          code: `const monitor = peripheral.find("monitor");`,
          memo: '「モニタリング（monitoring）」と同じ単語です。'
        }
      },
    ]
  }
};