const fs = require('fs');
const path = require('path');

// 故事配置（故事76-80）
const storyConfigs = [
  { theme: '音乐创作', title: '旋律人生', subtitle: '音乐梦想', tags: '音乐 · 创作 · 艺术' },
  { theme: '电影制作', title: '光影传奇', subtitle: '电影人生', tags: '电影 · 制作 · 创意' },
  { theme: '雕塑艺术', title: '雕塑之美', subtitle: '艺术传承', tags: '雕塑 · 艺术 · 创作' },
  { theme: '书法传承', title: '翰墨飘香', subtitle: '书法之道', tags: '书法 · 传统 · 文化' },
  { theme: '陶艺匠心', title: '陶瓷艺术', subtitle: '匠心独运', tags: '陶瓷 · 手艺 · 传承' }
];

// 所有故事内容 - 词汇量控制在50-60个
const storyContents = {
  '音乐梦想': `音乐创作工作室里，作曲家李明正【compose/创作】着新的音乐作品。作为一名音乐家，他每天都在用旋律表达情感。每一个音符都需要【careful/仔细】的编排，每一段旋律都承载着艺术的【passion/热情】。他深知音乐创作的【value/价值】。工作室里【quiet/安静】，他【focus/专注】于创作灵感。他【early/早早】来到工作室，准备工作做得非常【well/好】。

今天的工作是完成一首交响乐的核心段落。李明注意到旋律节奏还不够【smooth/流畅】，需要反复调整。他反复试听效果，寻找最佳的音乐表达。这是一个需要【patient/耐心】的过程。他【never/从不】放弃对完美的追求，【always/总是】力求更好的效果。他【try/尝试】不同的编排方式，寻找最优方案。

创作过程中，李明遇到了一个难题。某个乐段的情感表达不够【deep/深刻】，无法触动听众心灵。他【worried/担忧】地思考解决方案，尝试了多种表达方式。最终，他通过【creative/创新】的编排手法，成功增强了音乐的情感感染力。突破需要坚持。他【finally/终于】找到了答案。他【excited/激动】地完成创作。作品【perfectly/完美】呈现情感。

作品完成后，李明开始准备音乐会演出。他指挥乐团排练，调整每一个演奏细节。排练需要投入。他【careful/仔细】地指导演奏，【accurate/精确】把握节奏。他【nervous/紧张】但同时也【confident/自信】。他【spend/花费】大量时间完善演出。

音乐会当天，李明站在指挥台上，引导乐团演奏他的作品。观众的【warm/热烈】反响让他感到欣慰。他的音乐作品获得了高度评价，被认为是充满情感的佳作。音乐会【successful/成功】。他【proud/自豪】地看着观众反应。每个人都为他的【achieve/成就】感到高兴。

演出结束后，李明感到一种深深的【satisfy/满足】。创作的喜悦让他感到欣慰，但他明白，这只是音乐生涯的一部作品。他【humbly/谦虚地】接受观众的掌声。成功在此【mark/标记】。他【continue/继续】追求更高的音乐境界。

他明白，音乐不仅是职业，更是情感的传递者。他开始研究各种音乐流派，学习不同的创作技巧。他希望通过持续创作，为听众带来更多精神享受。艺术在此传递。他【respect/尊重】音乐传统，【innovate/创新】创作方法，【share/分享】音乐理念。他【active/积极】参与音乐交流。

李明开始培养年轻的音乐家，传授创作技巧和艺术理念。他告诉他们："音乐创作需要【passion/热情】和【devotion/奉献】。我们用旋律的力量表达情感，用音乐的方式触动心灵。"他的指导帮助了许多新人成长。传承在此延续。他【patient/耐心】地讲解，【encourage/鼓励】创新精神。年轻音乐家都受到他的【inspire/启发】。

音乐梦想，让李明感受到创作的魅力和艺术的价值。他决定继续深耕这个领域，用旋律能力表达情感，用音乐方式触动人心。这是他选择的道路，也是他热爱的生活。每一次创作，都是一次对情感的诠释。这是他的使命。他【determine/决心】一生【devote/奉献】给音乐事业，【create/创作】更多动听作品，让听众获得精神的【enjoyment/享受】，【build/建立】属于自己的音乐传奇。他【firmly/坚定地】相信音乐的力量。他【promise/承诺】会一直坚持创作。

某次音乐交流会上，李明分享了他创作理念："音乐是情感的传递者。我们用旋律的力量，让听众心灵得到触动。"同行们深受启发，开始思考音乐的深层意义。交流会现场【applaud/响起掌声】。他用亲身经历证明，坚持的力量可以创作佳作，音乐的精神可以触动人心。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。`,

  '电影人生': `电影制作公司的工作室里，导演王华正【review/审查】着最新拍摄的素材。作为一名电影导演，她每天都在创作视觉故事。每一个镜头都需要【meticulous/细致】的设计，每一个画面都承载着故事的【significance/意义】。她深知电影制作的【magnitude/重大】责任。工作室里【busy/忙碌】，她【focus/专注】于剪辑工作。她【early/早早】来到工作室，每天都很【intense/紧张】。她【always/总是】保持高度的创作热情。

今天的工作是剪辑电影的关键段落。王华注意到画面节奏还不够【compact/紧凑】，需要反复调整。她反复观看素材，寻找最优的剪辑节奏。这是一个需要【patience/耐心】和判断的过程。她【never/从不】放弃对完美的追求，【continuously/持续地】改进剪辑。她【try/尝试】不同的剪辑手法，寻找最佳叙事节奏。

剪辑过程中，王华遇到了一个难题。某个情节的转折不够【natural/自然】，影响观众体验。她【worried/担忧】地思考解决方案，尝试了多种剪辑方式。最终，她通过【creative/创新】的镜头衔接，成功让情节转折更加流畅。突破需要智慧。她【finally/终于】找到了答案。她【excited/激动】地完成剪辑。画面【perfectly/完美】呈现故事。

剪辑完成后，王华开始准备电影后期制作。她调整色彩和音效，完善每一个画面细节。后期需要投入。她【careful/仔细】地调整效果，【accurate/精确】把握画面风格。她【nervous/紧张】但同时也【confident/自信】。她【spend/花费】大量时间完善作品。

电影首映礼上，王华看着观众沉浸在故事中，心中感到欣慰。观众对她的电影给予了高度评价，认为是一部充满创意的佳作。首映礼【successful/成功】。她【proud/自豪】地看着观众反应。每个人都为她的【achieve/成就】感到敬佩。

首映结束后，王华感到一种深深的【satisfaction/满足】。创作的喜悦让她感到欣慰，但她明白，这只是电影生涯的一部作品。她【humbly/谦逊地】接受观众的赞誉。成功在此【mark/标记】。她【continue/继续】追求更高的创作境界。

她明白，电影不仅是职业，更是故事的讲述者。她开始研究各种电影风格，学习不同的叙事技巧。她希望通过持续创作，为观众带来更多视觉盛宴。艺术在此传递。她【respect/尊重】电影艺术，【innovate/创新】叙事方法，【share/分享】创作经验。她【active/积极】参与电影交流。

王华开始培养年轻的电影人，传授制作技巧和创作理念。她告诉他们："电影制作需要【vision/远见】和【dedication/奉献】。我们用镜头的力量讲述故事，用画面方式打动观众。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【encourage/鼓励】创作精神。年轻电影人都受到她的【inspire/启发】。

电影人生，让王华感受到创作的魅力和故事的价值。她决定继续深耕这个领域，用镜头能力讲述故事，用画面方式打动观众。这是她选择的道路，也是她热爱的使命。每一次制作，都是一次对故事的诠释。这是她的责任。她【determine/决心】一生【devote/奉献】给电影事业，【create/创作】更多精彩作品，让观众获得视觉的【enjoyment/享受】，【build/建立】属于自己的电影传奇。她【firmly/坚定地】相信创作的力量。她【promise/承诺】会一直坚持制作。

某次电影论坛上，王华分享了她创作理念："电影是故事的讲述者。我们用镜头的力量，让观众沉浸在精彩世界。"同行们深受启发，开始思考电影的深层意义。论坛现场【applaud/响起掌声】。她用亲身经历证明，坚持的力量可以创作佳作，电影的精神可以打动人心。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。`,

  '艺术传承': `雕塑艺术工作室的创作室里，雕塑家陈明正【create/创作】着新的雕塑作品。作为一名雕塑艺术家，他每天都在塑造艺术形态。每一块材料都需要【careful/仔细】的处理，每一道刻痕都承载着艺术的【value/价值】。他深知雕塑创作的【significance/意义】。创作室里【quiet/安静】，他【focus/专注】于雕刻细节。他【early/早早】来到工作室，每天都很【busy/忙碌】。他【always/总是】保持高度的创作热情。

今天的工作是完成一件人物雕塑作品。陈明注意到雕塑形态还不够【perfect/完美】，需要反复打磨。他反复观察作品效果，寻找最优的雕刻方案。这是一个需要【patient/耐心】的过程。他【never/从不】放弃对完美的追求，【always/总是】力求更好的效果。他【try/尝试】不同的雕刻手法，寻找最佳形态。

创作过程中，陈明遇到了一个难题。某个细节的处理不够【delicate/精细】，影响整体效果。他【worried/担忧】地思考解决方案，尝试了多种雕刻方式。最终，他通过【meticulous/细致】的刻画手法，成功提升了雕塑的艺术品质。突破需要坚持。他【finally/终于】找到了答案。他【excited/激动】地完成作品。雕塑【perfectly/完美】呈现美感。

作品完成后，陈明开始准备雕塑展览。他布置展厅环境，调整灯光效果。展览需要投入。他【careful/仔细】地安排展示，【accurate/精确】把握氛围。他【nervous/紧张】但同时也【confident/自信】。他【spend/花费】大量时间完善展览。

雕塑展览开幕时，陈明看着观众欣赏他的作品，心中感到欣慰。观众对他的雕塑给予了高度评价，认为是充满艺术感的佳作。展览【successful/成功】。他【proud/自豪】地看着观众反应。每个人都为他的【achieve/成就】感到敬佩。

展览结束后，陈明感到一种深深的【satisfaction/满足】。创作的喜悦让他感到欣慰，但他明白，这只是雕塑生涯的一部作品。他【humbly/谦逊地】接受观众的赞誉。成功在此【mark/标记】。他【continue/继续】追求更高的艺术境界。

他明白，雕塑不仅是职业，更是形态的表达者。他开始研究各种雕塑流派，学习不同的创作技巧。他希望通过持续创作，为观众带来更多视觉享受。艺术在此传递。他【respect/尊重】雕塑传统，【innovate/创新】创作方法，【share/分享】艺术理念。他【active/积极】参与艺术交流。

陈明开始培养年轻的雕塑家，传授雕刻技巧和艺术理念。他告诉他们："雕塑创作需要【passion/热情】和【devotion/奉献】。我们用雕刻的力量塑造形态，用雕塑方式表达美感。"他的指导帮助了许多新人成长。传承在此延续。他【patient/耐心】地讲解，【encourage/鼓励】创作精神。年轻雕塑家都受到他的【inspire/启发】。

雕塑之美，让陈明感受到创作的魅力和艺术的价值。他决定继续深耕这个领域，用雕刻能力塑造形态，用雕塑方式表达美感。这是他选择的道路，也是他热爱的生活。每一次创作，都是一次对形态的诠释。这是他的使命。他【determine/决心】一生【devote/奉献】给雕塑事业，【create/创作】更多艺术作品，让观众获得视觉的【enjoyment/享受】，【build/建立】属于自己的雕塑传奇。他【firmly/坚定地】相信艺术的力量。他【promise/承诺】会一直坚持创作。

某次艺术交流会上，陈明分享了他创作理念："雕塑是形态的表达者。我们用雕刻的力量，让观众感受艺术的魅力。"同行们深受启发，开始思考雕塑的深层意义。交流会现场【applaud/响起掌声】。他用亲身经历证明，坚持的力量可以创作佳作，艺术的精神可以打动人心。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。`,

  '书法之道': `书法艺术工作室的书房里，书法家张伟正【practice/练习】着传统书法技法。作为一名书法艺术家，他每天都在传承书法文化。每一个笔画都需要【meticulous/细致】的书写，每一幅作品都承载着文化的【significance/意义】。他深知书法传承的【value/价值】。书房里【quiet/安静】，他【focus/专注】于笔法练习。他【early/早早】来到书房，每天都很【busy/忙碌】。他【always/总是】保持高度的传承精神。

今天的工作是完成一幅书法作品。张伟注意到笔画力度还不够【standard/规范】，需要反复练习。他反复书写练习，寻找最优的笔法表达。这是一个需要【patience/耐心】和坚持的过程。他【never/从不】放弃对完美的追求，【continuously/持续地】改进技法。他【try/尝试】不同的书写方式，寻找最佳笔法。

创作过程中，张伟遇到了一个难题。某种笔法的运用不够【smooth/流畅】，影响作品气势。他【worried/担忧】地思考解决方案，尝试了多种书写方式。最终，他通过【careful/仔细】的技法调整，成功提升了书法的艺术品质。突破需要坚持。他【finally/终于】找到了答案。他【excited/激动】地完成作品。书法【perfectly/完美】呈现气势。

作品完成后，张伟开始准备书法展览。他布置展厅环境，调整作品展示。展览需要投入。他【careful/仔细】地安排展示，【accurate/精确】把握氛围。他【nervous/紧张】但同时也【confident/自信】。他【spend/花费】大量时间完善展览。

书法展览开幕时，张伟看着观众欣赏他的作品，心中感到欣慰。观众对他的书法给予了高度评价，认为是充满文化底蕴的佳作。展览【successful/成功】。他【proud/自豪】地看着观众反应。每个人都为他的【achieve/成就】感到敬佩。

展览结束后，张伟感到一种深深的【satisfaction/满足】。传承的喜悦让他感到欣慰，但他明白，这只是书法生涯的一部作品。他【humbly/谦逊地】接受观众的赞誉。成功在此【mark/标记】。他【continue/继续】追求更高的书法境界。

他明白，书法不仅是职业，更是文化的传承者。他开始研究各种书法流派，学习不同的书写技巧。他希望通过持续传承，为文化带来更多延续。艺术在此传递。他【respect/尊重】书法传统，【maintain/维护】文化精髓，【share/分享】书法理念。他【active/积极】参与文化交流。

张伟开始培养年轻的书法爱好者，传授书写技巧和文化理念。他告诉他们："书法传承需要【respect/尊重】和【devotion/奉献】。我们用书写的力量传承文化，用书法方式延续文明。"他的指导帮助了许多新人成长。传承在此延续。他【patient/耐心】地讲解，【encourage/鼓励】传承精神。年轻书法爱好者都受到他的【inspire/启发】。

书法之道，让张伟感受到传承的魅力和文化的价值。他决定继续深耕这个领域，用书写能力传承文化，用书法方式延续文明。这是他选择的道路，也是他热爱的使命。每一次书写，都是一次对文化的诠释。这是他的责任。他【determine/决心】一生【devote/奉献】给书法事业，【preserve/传承】更多书法技艺，让文化得到更好的【continuation/延续】，【build/建立】属于自己的书法传奇。他【firmly/坚定地】相信文化的力量。他【promise/承诺】会一直坚持传承。

某次文化交流会上，张伟分享了他传承理念："书法是文化的传承者。我们用书写的力量，让传统技艺得到延续。"同行们深受启发，开始思考书法的深层意义。交流会现场【applaud/响起掌声】。他用亲身经历证明，坚持的力量可以传承文化，书法的精神可以延续文明。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。`,

  '匠心独运': `陶艺工作室的创作室里，陶艺师刘芳正【create/创作】着新的陶瓷作品。作为一名陶艺师，她每天都在塑造陶瓷艺术。每一块陶泥都需要【careful/仔细】的捏塑，每一件作品都承载着匠心的【value/价值】。她深知陶艺创作的【significance/意义】。创作室里【quiet/安静】，她【focus/专注】于捏塑细节。她【early/早早】来到工作室，每天都很【busy/忙碌】。她【always/总是】保持高度的匠心精神。

今天的工作是完成一件瓷器作品。刘芳注意到陶泥塑形还不够【perfect/完美】，需要反复调整。她反复捏塑作品，寻找最优的形态表达。这是一个需要【patient/耐心】的过程。她【never/从不】放弃对完美的追求，【always/总是】力求更好的效果。她【try/尝试】不同的塑形手法，寻找最佳形态。

创作过程中，刘芳遇到了一个难题。某个釉色的应用不够【delicate/精细】，影响整体效果。她【worried/担忧】地思考解决方案，尝试了多种釉色配方。最终，她通过【meticulous/细致】的釉色调整，成功提升了陶瓷的艺术品质。突破需要坚持。她【finally/终于】找到了答案。她【excited/激动】地完成作品。陶瓷【perfectly/完美】呈现美感。

作品完成后，刘芳开始准备陶艺展览。她布置展厅环境，调整作品展示。展览需要投入。她【careful/仔细】地安排展示，【accurate/精确】把握氛围。她【nervous/紧张】但同时也【confident/自信】。她【spend/花费】大量时间完善展览。

陶艺展览开幕时，刘芳看着观众欣赏她的作品，心中感到欣慰。观众对她的陶瓷给予了高度评价，认为是充满匠心的佳作。展览【successful/成功】。她【proud/自豪】地看着观众反应。每个人都为她的【achieve/成就】感到敬佩。

展览结束后，刘芳感到一种深深的【satisfaction/满足】。创作的喜悦让她感到欣慰，但她明白，这只是陶艺生涯的一部作品。她【humbly/谦逊地】接受观众的赞誉。成功在此【mark/标记】。她【continue/继续】追求更高的匠心境界。

她明白，陶艺不仅是职业，更是手艺的传承者。她开始研究各种陶瓷流派，学习不同的制作技巧。她希望通过持续创作，为手艺带来更多延续。艺术在此传递。她【respect/尊重】陶艺传统，【innovate/创新】制作方法，【share/分享】匠心理念。她【active/积极】参与手艺交流。

刘芳开始培养年轻的陶艺爱好者，传授制作技巧和匠心理念。她告诉他们："陶艺创作需要【passion/热情】和【devotion/奉献】。我们用捏塑的力量塑造作品，用陶瓷方式传承手艺。"她的指导帮助了许多新人成长。传承在此延续。她【patient/耐心】地讲解，【encourage/鼓励】匠心精神。年轻陶艺爱好者都受到她的【inspire/启发】。

匠心独运，让刘芳感受到创作的魅力和手艺的价值。她决定继续深耕这个领域，用捏塑能力塑造作品，用陶瓷方式传承手艺。这是她选择的道路，也是她热爱的生活。每一次创作，都是一次对手艺的诠释。这是她的使命。她【determine/决心】一生【devote/奉献】给陶艺事业，【create/创作】更多陶瓷作品，让手艺得到更好的【continuation/延续】，【build/建立】属于自己的陶艺传奇。她【firmly/坚定地】相信手艺的力量。她【promise/承诺】会一直坚持传承。

某次手艺交流会上，刘芳分享了她创作理念："陶瓷是手艺的传承者。我们用捏塑的力量，让传统技艺得到延续。"同行们深受启发，开始思考陶艺的深层意义。交流会现场【applaud/响起掌声】。她用亲身经历证明，坚持的力量可以创作佳作，手艺的精神可以传承技艺。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。`
};

// 生成学习版HTML
function generateLearningHTML(config, storyContent, storyIndex) {
  let processedContent = storyContent.replace(/【(\w+)\/([^】]+)】/g, (match, word, meaning) => {
    return `<span class="w">${word}(${meaning})📢</span>`;
  });

  const paragraphs = processedContent.split('\n\n').filter(p => p.trim());
  const paragraphsHTML = paragraphs.map(p => `<p>${p}</p>`).join('\n');

  const wordCount = (storyContent.match(/【\w+\/[^】]+】/g) || []).length;
  const charCount = storyContent.replace(/【\w+\/[^】]+】/g, '').length;

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${config.title}：${config.subtitle} · 学习版</title>
<style>
  :root {
    --pill: #E1BEE7;
    --accent: #9C27B0;
    --bg-soft: #F3E5F5;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-family: -apple-system, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif;
    color: #2b2b2b;
    background: linear-gradient(180deg, var(--bg-soft), #ffffff);
    background-attachment: fixed;
  }
  .wrap { max-width: 297mm; width: 100%; margin: 0 auto; padding: 0 40px 80px; }
  header.top { text-align: center; padding: 46px 40px 30px; }
  header.top .badge {
    display: inline-block;
    padding: 5px 16px;
    border-radius: 999px;
    background: var(--accent);
    color: #fff;
    font-size: 13px;
    letter-spacing: 2px;
    margin-bottom: 16px;
  }
  header.top h1 { font-size: 34px; margin: 0 0 10px; letter-spacing: 2px; }
  header.top p.sub { color: #888; font-size: 15px; margin: 0 0 18px; }
  section.story {
    background: #fff; border-radius: 20px; padding: 30px 32px 34px;
    margin-bottom: 30px; box-shadow: 0 8px 30px rgba(0,0,0,.05);
  }
  section.story .step {
    display: inline-block; font-size: 13px; color: var(--accent); font-weight: 700;
    border-left: 4px solid var(--accent); padding-left: 10px; margin-bottom: 14px;
    background: var(--bg-soft); border-radius: 4px; padding: 6px 12px;
  }
  section.story h2 { font-size: 26px; margin: 6px 0 8px; letter-spacing: 1px; line-height: 1.35; }
  section.story h2 .no { color: var(--accent); margin-right: 10px; }
  section.story .meta { font-size: 13px; color: #aaa; margin-bottom: 22px; }
  section.story .text p { font-size: 18px; line-height: 2.4; margin: 0 0 4px; text-align: justify; }
  .w {
    background-color: #E1BEE7;
    border-radius: 999px;
    padding: 0.12em 0.55em;
    margin: 0 1px;
    white-space: nowrap;
    color: #333;
    font-weight: 600;
  }
  footer { text-align: center; color: #bbb; font-size: 13px; margin-top: 40px; }
</style>
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div class="badge">看故事记单词</div>
      <h1>${config.title}</h1>
      <p class="sub">${config.tags}</p>
    </header>
    <section class="story">
      <div class="step">Step 1：在语境中认识单词</div>
      <h2><span class="no">Story${String(storyIndex).padStart(2, '0')}</span>${config.subtitle}</h2>
      <div class="meta">本篇约 ${charCount} 字 · 融入 ${wordCount} 个重点词汇 · 点击📢可朗读发音</div>
      <div class="text">
${paragraphsHTML}
      </div>
    </section>
    <footer>${config.title}：${config.subtitle} · 学习版　|　看故事记单词</footer>
  </div>
</body>
</html>`;
}

// 生成复习版HTML
function generateReviewHTML(config, storyContent, storyIndex) {
  let processedContent = storyContent.replace(/【(\w+)\/([^】]+)】/g, (match, word, meaning) => {
    return `<span class="r" onclick="toggle(this)">${word}(<span class="h">${meaning}</span>)</span>`;
  });

  const paragraphs = processedContent.split('\n\n').filter(p => p.trim());
  const paragraphsHTML = paragraphs.map(p => `<p>${p}</p>`).join('\n');

  const wordCount = (storyContent.match(/【\w+\/[^】]+】/g) || []).length;
  const charCount = storyContent.replace(/【\w+\/[^】]+】/g, '').length;

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${config.title}：${config.subtitle} · 复习版</title>
<style>
  :root { --pill-review: #C8E6C9; --accent: #4CAF50; --bg-soft: #E8F5E9; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { margin: 0; padding: 0; width: 100%; min-height: 100vh;
    font-family: -apple-system, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif;
    color: #2b2b2b; background: linear-gradient(180deg, var(--bg-soft), #ffffff); background-attachment: fixed; }
  .wrap { max-width: 297mm; width: 100%; margin: 0 auto; padding: 0 40px 80px; }
  header.top { text-align: center; padding: 46px 40px 30px; }
  header.top .badge { display: inline-block; padding: 5px 16px; border-radius: 999px;
    background: var(--accent); color: #fff; font-size: 13px; letter-spacing: 2px; margin-bottom: 16px; }
  header.top h1 { font-size: 34px; margin: 0 0 10px; letter-spacing: 2px; }
  header.top p.sub { color: #888; font-size: 15px; margin: 0 0 18px; }
  section.story { background: #fff; border-radius: 20px; padding: 30px 32px 34px;
    margin-bottom: 30px; box-shadow: 0 8px 30px rgba(0,0,0,.05); }
  section.story .step { display: inline-block; font-size: 13px; color: var(--accent); font-weight: 700;
    border-left: 4px solid var(--accent); padding-left: 10px; margin-bottom: 14px;
    background: var(--bg-soft); border-radius: 4px; padding: 6px 12px; }
  section.story h2 { font-size: 26px; margin: 6px 0 8px; letter-spacing: 1px; line-height: 1.35; }
  section.story h2 .no { color: var(--accent); margin-right: 10px; }
  section.story .meta { font-size: 13px; color: #aaa; margin-bottom: 22px; }
  section.story .text p { font-size: 18px; line-height: 2.4; margin: 0 0 12px; text-align: justify; }
  .r { background-color: #C8E6C9; border-radius: 999px; padding: 2px 8px; margin: 0 2px;
    white-space: nowrap; color: #333; font-weight: 600; cursor: pointer; }
  .r:hover { opacity: 0.85; }
  .r .h { color: transparent; user-select: none; }
  .r.show .h { color: #333; }
  footer { text-align: center; color: #bbb; font-size: 13px; margin-top: 40px; }
</style>
</head>
<body>
  <div class="wrap">
    <header class="top">
      <div class="badge">看故事记单词 · 复习版</div>
      <h1>${config.title}</h1>
      <p class="sub">${config.tags}</p>
    </header>
    <section class="story">
      <div class="step">Step 2：看单词回忆中文释义</div>
      <h2><span class="no">Story${String(storyIndex).padStart(2, '0')}</span>${config.subtitle}</h2>
      <div class="meta">本篇约 ${charCount} 字 · 融入 ${wordCount} 个重点词汇 · 点击词汇显示/隐藏中文释义</div>
      <div class="text">
${paragraphsHTML}
      </div>
    </section>
    <footer>${config.title}：${config.subtitle} · 复习版　|　看故事记单词</footer>
  </div>
  <script> function toggle(el) { el.classList.toggle('show'); } </script>
</body>
</html>`;
}

// 主函数
function main() {
  const outputDir = path.join(__dirname, '../result');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  storyConfigs.forEach((config, index) => {
    const content = storyContents[config.subtitle];

    if (!content) {
      console.log(`警告：缺少 "${config.subtitle}" 的故事内容`);
      return;
    }

    const num = String(76 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 76 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 76 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事76-80，词汇量50-60）');
}

main();