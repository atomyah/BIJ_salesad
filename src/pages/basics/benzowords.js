import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
//import Image from "../../components/image"
import SEO from "../../components/seo"

import { Container } from 'react-bootstrap'
import Style from './benzowords.module.css'

const BenzoWords = () => (
    <Layout>
      <Container fluid="md">
        <SEO title="ベンゾジアゼピン関連用語集"
        description="遷延性離脱症状：断薬した後にも通常離脱症状はすぐになくならず、特に減薬期間を十分に設けなかった場合には数年に及びます。時には１０年、２０年と続くこともあり、 後遺症との線引きはムツカシイです" 
        image="/twitterimg/icon-144x144.png" 
        lang="ja"
        />
        <h1 className={Style.h1Size}>ベンゾジアゼピン関連用語集</h1>
        <ui>
      <li className={Style.liDeco}> ベンゾジアゼピン依存症 </li>
        <div style={{marginBottom: 20}}>
        ベンゾジアゼピン依存症には2種類あります。ひとつ目はアルコール依存症や違法薬物依存症と同じように精神的な渇望を伴い、乱用、違法入手により快楽目的での使用
        につながる「精神依存（psychological dependence）」です。「アディクション（addiction）」とも呼ばれます。
        もう一つが「身体依存（physical dependence）」で、こちらは生理学的、遺伝学的な適応変化のことで、つねに体内に入ってくる環境に合わせて生体活動が維持されるように変化した状態のことです。
        したがって、「ベンゾジアゼピン依存症」であっても、それが<strong>精神依存と身体依存それぞれで治療方法は異なり、どちらの依存かを見極めることがきわめて重要</strong>です。
        詳しくは<a href="https://www.amazon.co.jp/gp/product/B0925VD9W1/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B0925VD9W1&linkCode=as2&tag=kokkahasan-22&linkId=94f04c0b99835aaa944655bc2d852dda" target="_blank" rel="noreferrer noopener">
            『ベンゾジアゼピン薬の安全な離脱方法』</a>の第2節で解説しています。
        <br />
        </div>
      <li className={Style.liDeco}> 非ベンゾ </li>
        <div style={{marginBottom: 20}}>ベンゾジアゼピン系薬はGABA受容体のサブユニットα1とγに作用します。
        結果，催眠作用、抗不安作用、そして筋弛緩作用が期待できます。いっぽうで非ベンゾ（非ベンゾジアゼピン系薬。英語でもanti-benzodiazepineと言います）は、
        α1のほうのみに選択的に作用するので催眠作用だけを期待した睡眠薬としては通常のベンゾジアゼピン系睡眠薬よりも利点があります。
        薬剤の種類としてはゾルピデム（マイスリー）、ゾピクロン（アモバン）、エスゾピクロン（ルネスタ）などがそうです。作用機序はベンゾと同じなので、この<strong>「非」という字は“ベンゾにあらず”ということではありません</strong>。
        ゾピクロン（zopiclone）、ゾルピデム（zolpidem）の頭文字をとってZ薬と呼ばれることもあります。
        本当の意味で“ベンゾにあらず”、つまりGABA受容体に作用しない睡眠薬としてはベルソムラ（オレキシン受容体作動薬）、ロゼレム（メラトニン受容体作動薬）があります。
        非ベンゾジアゼピンの漸減に関する詳細はは<a href="https://www.amazon.co.jp/gp/product/B0925VD9W1/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B0925VD9W1&linkCode=as2&tag=kokkahasan-22&linkId=94f04c0b99835aaa944655bc2d852dda" target="_blank" rel="noreferrer noopener">
            『ベンゾジアゼピン薬の安全な離脱方法』</a>の第５節で解説しています。
        </div>
      <li className={Style.liDeco}> 副作用 </li>
        <div style={{marginBottom: 20}}>副作用とは文字通り薬を飲むことによって生じる副反応です。ベンゾジアゼピンの場合ですと、転倒や健忘、夜中の徘徊などがあります。
          PMDA（医薬品医療機器総合機構）は離脱症状もひっくるめて副作用情報を受け付けており、広義には離脱症状も副作用のひとつではありますが、<strong>実臨床では服用中に生じた副反応(side effect)と、
          クスリをやめることで起きる離脱症状（withdrawal symptons）は区別して対応すべき</strong>でしょう。
        </div>
      <li className={Style.liDeco}> 離脱症状 </li>
        <div style={{marginBottom: 20}}>ベンゾジアゼピンの服薬を止める、または減らすことで発生する症状を離脱症状（widthdrawal)といいます。
          また、服薬中であっても耐性がついてしまい、服薬量を変えていないのにも関わらずベンゾが効かなくなることによって発生する離脱症状を常用量離脱（tolerence widthdrawal)といいます。
        </div>
      <li className={Style.liDeco}> 遷延性離脱症状（Protracted Benzodiazepine Withdrawal Syndrome） </li>
        <div style={{marginBottom: 20}}>断薬した後にも通常離脱症状はすぐになくならず、特に減薬期間を十分に設けなかった場合には数年に及びます。それを遷延性離脱症状といいます。
        いくつかのエビデンスでは5年以上の残存を示しており、時には１０年、２０年と続くこともあります。
        アイルランド国営放送RTÉで放送されたドキュメンタリー番組<a href="https://youtu.be/0lsbiczKfJY" target="_blank" rel="noreferrer noopener">「ベンゾジアゼピン～医療災害」</a>をプロデュースし、司会も務めたシェーン・ケニー氏は、自身の離脱から8年を超えても遷延性離脱症候群に苦しんでいます（2017時点）。
          後遺症との線引きは難しいです。十分な減薬期間を設ければ遷延性離脱症状に陥る可能性は低くなります。
        　<br />
          参考：<Link to="doctors-article/20">ベンゾ遷延性離脱症候群の発生メカニズム</Link>
        </div> 
      <li className={Style.liDeco}> 投与間離脱症状 </li>
        <div style={{marginBottom: 20}}>半減期の短いベンゾ（デパス、ソラナックスなど）は１日２～３回服用することが多いですが、半減期が短いためその薬効が数時間で
        　徐々に弱まっていきます。ベンゾジアゼピンに身体依存していた場合、ベンゾが抑えていた興奮系神経伝達物質が徐々に嵐のように吹き荒れることになり、服薬と服薬の間隙に
        　離脱症状がキツくなるわけです（１日のうちに山と谷を繰り返す）。服薬と服薬の間隙に発生する離脱症状をとくに投与間離脱症状（Inter-dose widthdrawal)といいます。
        　<br />
          参考：<Link to="doctors-article/6">慢性疾患と似ているベンゾジアゼピン医原症状</Link>
        </div> 
      <li className={Style.liDeco}> 力価 </li>
        <div style={{marginBottom: 20}}>薬剤の強さのことをいいます。ベンゾジアゼピン系薬剤の場合は次に説明する「<Link to="/basics/benzolist">ジアゼパム換算値</Link>」というもので測ります。
        </div> 
      <li className={Style.liDeco}> ジアゼパム換算 </li>
        <div style={{marginBottom: 20}}>ベンゾジアゼピン系薬剤の力価を測るのにジアゼパム換算値を用います。<Link to="/basics/benzolist" target="_blank" rel="noreferrer noopener">こちらの表</Link>をごらんください。
          一番上に、一般名「ジアゼパム」があります。ジアゼパム5mgに対して、同じ作用強度を期待するにはどの程度のmgを服用すればいいか、が右端の<span className={Style.fontRed}>等価量（経口）</span>の数字になります。
          例えばジアゼパムのすぐ下には「アルプラゾラム」があります。アルプラゾラムの等価量は0.25mgとなっています（アシュトン値）。つまり、アルプラゾラム0.25mgとジアゼパム5mgは同じ強さになるということです。
          ざっくり言えば、この数字が小さいほど強いクスリであるということです。日本ではよく「弱いクスリですから」とドクターに言われて処方されてきたデパス、そのジアゼパム換算値は1.5です。かなり強い薬であったというわけです。
          ジアゼパム換算値は薬理的な根拠があって作られた数値ではなく、人の体感で決められているようです（二重盲検試験）。従っていくつも種類があり<strong>ジアゼパム換算値はあくまで目安</strong>です。
        </div> 
      <li className={Style.liDeco}> 半減期 </li>
        <div style={{marginBottom: 20}}>やはり<Link to="/basics/benzolist" target="_blank" rel="noreferrer noopener">同じ表</Link>に「半減期[活性代謝物]」の欄があります。単位は時間です。薬剤の血中濃度が服薬してから半分になるまでどのくらいの時間がかかるか、を示しています。
          さきほどのジアゼパムは20~100時間となっています。代謝には個人差があるのでこのような表記になってしまうのですが、ジアゼパムはかなり長い半減期を持ち、体内にとどまる時間が長い薬ということになります。
          おなじくすぐ下のアルプラゾラムは6~12となっています。半日もしないうちにすぐ体から出て行ってしまう、いわば短期作用型のベンゾといえます。
        </div> 
      <li className={Style.liDeco}> テーパリング </li>
        <div style={{marginBottom: 20}}>
          tapering. 直訳すると“先細り”。減薬手法のことで、コーンの形のように徐々に先細るように減薬していくやり方です。ですので服薬量は2次曲線を描くように０に近づいていきます。
        </div> 
      <li className={Style.liDeco}> マイクロテーパリング </li>
        <div style={{marginBottom: 20}}>
          テーパリングと同義ですが、一度に減薬する量をかなり小幅にして減らしていくやり方です。たとえばレキソタン10mgを減らす際に、1か月に10%づつ、
          ですと10%減薬をする日は人によってかなり厳しい落差です（まったく問題ない人もいます）。
          その代わり、2～3日に1%づつであれば気持ちも脳神経にもあまりダメージを与えないという考え方で、超微量づつの減薬になるため「マイクロ」テーパリングと呼びます。
          参考：<Link to="/patients-article/12" target="_blank" rel="noreferrer noopener">ドライマイクロテーパリング法での減薬</Link>
        </div> 
      <li className={Style.liDeco}> 水溶液タイトレーション法 </li>
      <div style={{marginBottom: 20}}>
          マイクロテーパリングのやり方ですが、２つ方法があります。ひとつは水溶液タイトレーションです。100mlの水、または牛乳などに錠剤を溶かし、1%減薬するのであればそこから1mlシリンジで抜いて残りの99ml
          を飲めばいいです。詳しいやり方は<Link to="/patients-article/5" target="_blank" rel="noreferrer noopener">水溶液タイトレーションのページ</Link>をご覧ください。また水なり牛乳なりに錠剤を溶かして服薬すると稀に薬効が効かない人がいます。
          水溶液で服用しても薬効があることを必ず確認してから水溶液タイトレーションで減薬を行うことをお勧めします。
          <br />
          【注意‼】<strong>水溶液にして服用すると薬が反応しない方々がたまにいらっしゃいます</strong>。その場合はドライマイクロテーパリングで！
      </div> 
      <li className={Style.liDeco}> ドライカット法 </li>
      <div style={{marginBottom: 20}}>
        マイクロテーパリングのやり方のもうひとつの方法です。錠剤をハサミで少しずつカットしていくか薬局で細粉してもらって（パウダー化）、
        測りで重さを測って減らしていく方法です。
        秤（はかり）は数千円で買えます。細粉パウダーは乳糖を足してかさ上げできるのでこちらでもマイクロテーパリングは可能です。
        <br />
        【注意‼】<strong>服用方法を変更しても薬が反応するかどうか必ず確認してください</strong>。いきなり減薬作業を始めないように！
      </div> 
      <li className={Style.liDeco}> アシュトンマニュアル </li>
      <div style={{marginBottom: 20}}>
        クリスタル・ヘザー・アシュトンというイギリスの精神科医によって2002年編纂されたベンゾジアゼピン系薬剤の作用・離脱機序および離脱方法をまとめたマニュアル。
        正式には“ベンゾジアゼピン - それはどのように作用し、離脱するにはどうすればよいか”。日本では2012年に日本語版が田中 涼氏、ウェイン・ダグラス氏などの有志によって
        作成されインターネットでダウンロードできます。
        12年間にわたりベンゾジアゼピン減量のためのクリニックを運営し実際に臨床を行ったアシュトン教授によって、世界で初めてまとめられた減薬マニュアルとなっており、以後、
        世界中で数千万部がダウンロードされています。アシュトン教授はすでに故人。元ニューカッスル大学神経科学研究所名誉教授。
        拙書
        <a href="https://www.amazon.co.jp/gp/product/B0925VD9W1/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B0925VD9W1&linkCode=as2&tag=kokkahasan-22&linkId=94f04c0b99835aaa944655bc2d852dda" target="_blank" rel="noreferrer noopener">
            『ベンゾジアゼピン薬の安全な離脱方法』</a>の第4節でもアシュトンマニュアルについて解説しています。
        <br />
        【ダウンロードリンク】<a href="https://benzoinfojapan.org/pdf/Ashton_Manual_Japanese.pdf" target="_blank" rel="noreferrer noopener">アシュトンマニュアル日本語版</a>
        
      </div> 
      <li className={Style.liDeco}> ベンゾバディ </li>
      <div style={{marginBottom: 20}}>
        世界最大のベンゾ専門オンラインフォーラム。2004年コリン・モロン氏によって立ち上げられました。コリン氏もクロノピン（リボトリール・ランドセン）の被害者。
        しかし、当時のドクターバッシングに偏るオンラインフォーラムに嫌気がさし「ベンゾバディ」の開発を有志3人と決意します。投稿数300万件、登録ユーザー数7万人に達し20年近く
        有志ボランティアによって運営されています。米国からの書き込みが最も多いですが、ヨーロッパ各国、オセアニア、インド、ブラジルなど世界中のベンゾ離脱に苦しむ
        人々に利用されています。
        危険な投稿はボランティアによる巡回でチェックされ続けており、投稿内容は非常に有用性の高いものが多く、
        <strong>ベンゾジアゼピン身体依存患者の巨大な事例データベース</strong>と言えます。
        <br />
        → <a href="http://www.benzobuddies.org/forum/index.php" target="_blank" rel="noreferrer noopener">ベンゾバディ</a>
      </div> 
      <li className={Style.liDeco}> キンドリング </li>
      <div style={{marginBottom: 20}}>
        kindling。直訳すると“燃えあがる”という意味で、医療用語としてはいろいろな用途で使われているようです。ことベンゾ減薬に関しては次のような状態を言います。
        「ベンゾジアゼピン減薬は数年かけて少しづつ行うべき身体依存度が重度の患者に対し、
        一気断薬や半錠に減らすなどの急減薬は激しい離脱症状を引き起こし、多くの場合元の用量に戻すことになる。
        その後、再び大雑把な急減薬と再服薬を何度か繰り返していると、最終的には体がベンゾに反応しなくなってしまう。
        つまり用量を戻しても増薬しても興奮系神経伝達物質の暴走を食い止める役割を果たせず、一気断薬と同じような状態になってしまう」
        ざっくり言えばこのような状態をキンドリングと呼びます。
          詳しくは拙書<a href="https://www.amazon.co.jp/gp/product/B0925VD9W1/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B0925VD9W1&linkCode=as2&tag=kokkahasan-22&linkId=94f04c0b99835aaa944655bc2d852dda" target="_blank" rel="noreferrer noopener">
            『ベンゾジアゼピン薬の安全な離脱方法』</a>の第5節で解説しています。
      </div> 
      <li className={Style.liDeco}> 常用量離脱 </li>
      <div style={{marginBottom: 20}}>
        ベンゾジアゼピン薬に対し薬剤耐性がついたために、服用し続けているにも関わらず離脱症状が発生することです。
        和製用語であり、英語では「耐性形成による離脱症状（tolerance withdrawal）」つまり耐性離脱症状と言います。
        耐性がつきベンゾジアゼピン薬がその効果を示しにくくなったとはいえ、まだいくらかでも興奮系神経伝達物質を抑制する効果が残っているのであれば、
        <strong>常用量離脱が発生してもテーパリング減薬していく必要があります</strong>。
      </div> 
      <li className={Style.liDeco}> アカシジア </li>
      <div style={{marginBottom: 20}}>
       一般的には抗精神薬（メジャー系と呼ばれる精神薬）の副作用として認識されているが、
      ベンゾの離脱症状にも確かにあります。
        静座不能状態のことで、身体が勝手に動いたり震えたりし制御できない。精神症状（理由のない焦燥感・イライラなど）も伴う。
        ベンゾ離脱症状の中でもっとも厳しい症状のひとつですが、この症状についても強度の差はあると思います。
        トロント大学教授の臨床心理学者ジョーダン・ピーターソン博士は『死よりも厳しい』と自身のアカシジアについて語っています。
        <br />
        参考：<a href="https://youtu.be/7ul9kCDTUCw" target="_blank" rel="noreferrer noopener">臨床心理学者ジョーダン・ピーターソン：自身のベンゾジアゼピン離脱を語る</a>
      </div> 
  </ui>
    </Container>
    </Layout>
)

export default BenzoWords