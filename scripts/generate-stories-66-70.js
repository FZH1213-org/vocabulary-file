const fs = require('fs');
const path = require('path');

// 故事配置（故事66-70）- 使用高级词汇
const storyConfigs = [
  { theme: '航天探索', title: '宇宙征程', subtitle: '太空探索', tags: '航天 · 探索 · 勇气' },
  { theme: '文学创作', title: '笔端世界', subtitle: '文学大师', tags: '文学 · 创作 · 艺术' },
  { theme: '哲学思考', title: '智慧之光', subtitle: '哲学探索', tags: '哲学 · 思考 · 智慧' },
  { theme: '环境保护', title: '生态守护', subtitle: '环境使命', tags: '环境 · 保护 · 责任' },
  { theme: '考古发现', title: '历史回响', subtitle: '考古揭秘', tags: '考古 · 历史 · 发现' }
];

// 所有故事内容 - 使用高级词汇
const storyContents = {
  '太空探索': `航天控制中心的大厅里，航天工程师李明正【monitor/密切监控】着飞船的运行状态。作为一名航天科学家，他每天都在探索宇宙奥秘。每一次发射都需要【precise/精确的】计算，每一个任务都承载着人类探索的【aspiration/渴望】。他深知航天事业的【magnitude/重大】意义。控制中心里【sophisticated/精密复杂】的仪器运转着，他【devote/致力于】航天探索。他【persistently/坚持不懈地】跟踪数据，每天都很【intense/紧张投入】。他【always/总是】保持高度的责任感。

今天的任务是监控一次关键的空间对接操作。李明注意到飞船轨迹还存在【subtle/细微的】偏差，需要【meticulous/细致】的修正。他反复计算轨道参数，寻找最优调整方案。这是一个需要【precision/精确】和冷静的过程。他【never/从不】放弃对完美的追求，【continuously/持续地】优化方案。他【elaborate/详细计算】轨迹数据，【collaborate/协作】团队配合。航天任务【necessitate/需要】精确与协作。

任务执行过程中，李明遇到了一个【critical/关键性的】挑战。飞船姿态出现异常波动，对接面临风险。他【tensely/紧张地】分析故障原因，尝试了多种应急方案。最终，他通过【calculated/精确计算的】指令序列，成功稳定了飞船姿态，确保对接顺利完成。突破需要冷静。他【methodically/有条不紊地】执行指令，【ultimately/最终】化解危机。他【relieved/释然】地看到对接成功。操作【perfectly/完美地】完成任务。

任务完成后，李明开始整理详细的飞行报告。他【synthesize/综合分析】飞行数据，【evaluate/评估】任务成果，【document/详细记录】关键事件。每一份报告都需要【rigorous/严谨】的审核。报告撰写需要投入。他【meticulously/细致地】核对数据，【precisely/精确地】描述过程。他【apprehensive/忐忑】但同时也【proud/自豪】。他【invest/投入】大量时间完善文档。

任务成果发布会上，李明向公众展示航天探索成就。社会的【enthusiastic/热烈】反响让他感到欣慰。他的工作获得了高度认可，被认为是航天事业的【milestone/里程碑】。发布会【spectacular/精彩壮观】。他【tense/紧张】但【confident/自信】，成功地展示了成果。公众【eagerly/热切地】关注航天进展。他【proudly/自豪地】介绍探索意义。媒体【extensively/广泛地】报道。

发布后，李明感到一种深深的【accomplishment/成就感】。探索的喜悦让他感到欣慰，但他明白，这只是航天征程的阶段性成果。他【modestly/谦逊地】接受社会的认可。成功在此【manifest/显现】。他【proudly/自豪地】看着公众反响，知道这是探索的回报。他【proceed/继续】追求更高的航天目标。每个人都为这个【achievement/成就】感到振奋。

他明白，航天探索不仅是职业，更是人类文明进步的力量。他开始【contemplate/深入思考】宇宙奥秘，【investigate/深入研究】航天技术。他希望通过持续探索，推动人类走向更远的太空。知识在此【accumulate/积累】。他【respect/尊重】科学规律，【implement/实施】探索战略，【contribute/贡献】航天力量。他【actively/积极地】参与国际交流。他【frequently/频繁地】出席航天会议。

李明开始培养年轻的航天人才，传授技术知识和探索精神。他告诉他们："航天探索需要【courage/勇气】和【perseverance/毅力】。我们用技术的力量探索宇宙，用探索的精神拓展人类边界。"他的指导帮助了许多新人成长。传承在此延续。他【patiently/耐心地】讲解，【generously/慷慨地】分享经验，【encourage/鼓励】探索精神。他【successfully/成功地】培养了多位优秀工程师。年轻工程师都受到他的【inspire/启发】。

宇宙征程，让李明感受到探索的魅力和突破的价值。他决定继续深耕这个领域，用技术能力探索宇宙，用科学精神拓展边界。这是他选择的道路，也是他热爱的使命。每一次发射，都是一次对未知的世界。这是他的责任。他【determine/决心】一生【devote/奉献】给航天事业，【explore/探索】宇宙奥秘，让人类文明更加【advanced/进步】，【establish/建立】属于自己的探索传奇。他【firmly/坚定地】相信探索的力量。他【pledge/承诺】会一直坚持探索。

某次航天技术峰会上，李明分享了他探索理念："航天是人类探索宇宙的征程。我们用技术的力量，拓展人类文明的边界。"同行们深受启发，开始思考航天探索的深层意义。他的故事激励着更多航天人追求更高的境界。峰会现场【applaud/响起掌声】，大家【vigorously/热烈地】讨论。他用亲身经历证明，坚持的力量可以探索宇宙，勇气的精神可以突破边界。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。航天【domain/领域】需要这样的勇气。`,

  '文学大师': `文学创作工作室的书房里，作家王华正【compose/创作】着新的文学作品。作为一名资深作家，她每天都在用文字塑造精神世界。每一个章节都需要【creative/创造性的】构思，每一句话都承载着文学的【significance/意义】。她深知文学创作的【gravity/重大】价值。书房里【quiet/宁静】，她【devote/致力于】文学创作。她【persistently/坚持不懈地】打磨文字，每天都很【focused/专注投入】。她【always/总是】保持高度的文学追求。

今天的创作任务是完成一部小说的关键章节。王华注意到叙事结构还存在【intricate/复杂】的问题，需要【systematic/系统性】的调整。她反复推敲情节走向，寻找最佳的叙事节奏。这是一个需要【inspiration/灵感】和耐心的过程。她【never/从不】放弃对完美的追求，【continuously/持续地】改进作品。她【elaborate/详细构思】人物性格，【refine/打磨】文字表达。创作【necessitate/需要】灵感与坚持。

创作过程中，王华遇到了一个【substantial/实质性的】难题。核心人物的情感转折缺乏说服力，影响作品深度。她【anxiously/焦虑地】思考解决方案，尝试了多种叙事手法。最终，她通过【innovative/创新性的】视角转换，成功塑造了人物的内心世界，让情感转折更加真实动人。突破需要智慧。她【methodically/有条不紊地】调整结构，【eventually/最终】完成突破。她【thrilled/激动不已】地写下关键段落。作品【remarkably/显著地】提升深度。

作品完成后，王华开始进行精细的修改润色。她【scrutinize/仔细审查】每一句话，【evaluate/评估】文学效果，【polish/润色】文字表达。每一处修改都需要【meticulous/细致】的考量。修改需要投入。她【carefully/仔细地】推敲措辞，【precisely/精确地】把握节奏。她【apprehensive/忐忑不安】但同时也【optimistic/乐观期待】。她【invest/投入】大量时间完善作品。

作品出版后，王华看着读者热烈的反馈，心中感到欣慰。文学的成功让她感到满足。评论界对她的作品给予了高度评价，认为这是一部具有【profound/深刻】意义的佳作。作品【remarkably/显著地】引发共鸣。她【tense/紧张】但【confident/自信】，成功地出版了作品。读者【warmly/热烈地】反馈。她【proudly/自豪地】看着作品反响。评论【extensively/广泛地】赞誉。

出版后，王华感到一种深深的【accomplishment/成就感】。创作的喜悦让她感到欣慰，但她明白，这只是文学生涯的一部作品。她【modestly/谦逊地】接受评论界的认可。成功在此【manifest/显现】。她【proudly/自豪地】看着文学成就，知道这是创作的回报。她【proceed/继续】追求更高的文学目标。每个人都为这个【achievement/成就】感到敬佩。

她明白，文学创作不仅是职业，更是精神的表达者。她开始【contemplate/深入思考】文学本质，【investigate/深入研究】创作技巧。她希望通过持续创作，为读者带来更多精神食粮。艺术在此积累。她【respect/尊重】文学传统，【implement/实施】创新理念，【contribute/贡献】文学力量。她【actively/积极地】参与文学交流。她【frequently/经常】出席文学活动。

王华开始培养年轻的文学创作者，传授创作技巧和文学理念。她告诉他们："文学创作需要【sensitivity/敏感】和【dedication/奉献】。我们用文字的力量塑造精神世界，用文学的表达触动人心。"她的指导帮助了许多新人成长。传承在此延续。她【patiently/耐心地】讲解，【generously/慷慨地】分享经验，【encourage/鼓励】创作精神。她【successfully/成功地】培养了多位优秀作家。年轻作家都受到她的【inspire/启发】。

笔端世界，让王华感受到创作的魅力和文学的价值。她决定继续深耕这个领域，用文字能力塑造世界，用文学表达触动人心。这是她选择的道路，也是她热爱的使命。每一次创作，都是一次对精神的表达。这是她的责任。她【determine/决心】一生【devote/奉献】给文学事业，【create/创作】更多佳作，让读者获得精神的【enrichment/丰富】，【establish/建立】属于自己的文学传奇。她【firmly/坚定地】相信文学的力量。她【pledge/承诺】会一直坚持创作。

某次文学论坛上，王华分享了她创作理念："文学是精神的表达者。我们用文字的力量，塑造人类心灵的世界。"同行们深受启发，开始思考文学的深层意义。她的故事激励着更多作家追求更高的境界。论坛现场【applaud/响起掌声】，大家【vigorously/热烈地】讨论。她用亲身经历证明，坚持的力量可以塑造精神，文学的创作可以触动人心。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。文学【domain/领域】需要这样的创作。`,

  '哲学探索': `哲学研究院的书房里，哲学家陈明正【contemplate/深入思考】着人类存在的本质问题。作为一名哲学学者，他每天都在探索思想的边界。每一个命题都需要【rigorous/严谨的】论证，每一个观点都承载着智慧的【significance/意义】。他深知哲学思考的【magnitude/重大】价值。书房里【tranquil/宁静沉思】，他【devote/致力于】哲学研究。他【persistently/坚持不懈地】探索真理，每天都很【focused/专注深入】。他【always/总是】保持高度的思辨精神。

今天的研究任务是论证一个新的哲学命题。陈明注意到论证逻辑还存在【subtle/细微的】漏洞，需要【meticulous/细致】的完善。他反复推演逻辑链条，寻找最严密的论证路径。这是一个需要【intellect/智力】和耐心的过程。他【never/从不】放弃对真理的追求，【continuously/持续地】完善论证。他【elaborate/详细阐述】哲学观点，【refine/提炼】思想精华。哲学研究【necessitate/需要】智慧与严谨。

研究过程中，陈明遇到了一个【substantial/重大的】难题。核心概念的定义边界模糊，影响论证的严密性。他【anxiously/焦虑地】思考解决方案，尝试了多种概念界定方式。最终，他通过【innovative/创新性的】概念重构，成功明确了哲学概念的边界，让论证更加严密有力。突破需要智慧。他【methodically/有条不紊地】重构概念，【eventually/最终】完成突破。他【thrilled/激动不已】地写下论证。思想【remarkably/显著地】提升深度。

论证完成后，陈明开始撰写学术论文。他【synthesize/综合整理】研究成果，【evaluate/评估】理论意义，【articulate/清晰阐述】哲学价值。每一篇论文都需要【rigorous/严谨】的把关。论文撰写需要投入。他【meticulously/细致地】推敲措辞，【precisely/精确地】表达观点。他【apprehensive/忐忑不安】但同时也【optimistic/乐观期待】。他【invest/投入】大量时间完善论文。

论文发表后，陈明的哲学研究引起了学术界的高度关注。同行专家对他的发现给予了【substantial/重大】肯定，被认为是该领域的【breakthrough/重要突破】。他看到了哲学研究的价值。论文【remarkably/显著地】推动领域发展。他【tense/紧张】但【confident/自信】，成功发表了成果。学术界【eagerly/热切地】关注研究。他【proudly/自豪地】看着论文影响。期刊【extensively/广泛地】引用。

发表后，陈明感到一种深深的【accomplishment/成就感】。发现的喜悦让他感到欣慰，但他明白，这只是哲学研究的阶段性成果。他【modestly/谦逊地】接受学术界的认可。成功在此【manifest/显现】。他【proudly/自豪地】看着研究影响，知道这是探索的回报。他【proceed/继续】追求更高的智慧目标。每个人都为这个【achievement/成就】感到振奋。

他明白，哲学研究不仅是职业，更是人类智慧的传承。他开始【contemplate/深入思考】哲学本质，【investigate/深入研究】思想边界。他希望通过持续研究，为人类智慧贡献新的力量。知识在此积累。他【respect/尊重】哲学传统，【implement/实施】研究计划，【contribute/贡献】思想力量。他【actively/积极地】参与学术交流。他【frequently/频繁地】出席哲学会议。

陈明开始培养年轻的哲学研究者，传授思辨方法和哲学精神。他告诉他们："哲学研究需要【intellectual/智力的】严谨和【perseverance/毅力】。我们用智慧的力量探索真理，用思辨的精神传承文明。"他的指导帮助了许多新人成长。传承在此延续。他【patiently/耐心地】讲解，【generously/慷慨地】分享经验，【encourage/鼓励】探索精神。他【successfully/成功地】培养了多位优秀学者。年轻学者都受到他的【inspire/启发】。

智慧之光，让陈明感受到思考的魅力和真理的价值。他决定继续深耕这个领域，用智慧能力探索真理，用思辨精神传承文明。这是他选择的道路，也是他热爱的使命。每一次研究，都是一次对智慧的探索。这是他的责任。他【determine/决心】一生【devote/奉献】给哲学事业，【explore/探索】思想边界，让人类智慧更加【enriched/丰富】，【establish/建立】属于自己的哲学传奇。他【firmly/坚定地】相信智慧的力量。他【pledge/承诺】会一直坚持思考。

某次哲学学术会议上，陈明分享了他探索理念："哲学是人类智慧的传承。我们用思辨的力量，探索真理的边界。"同行们深受启发，开始思考哲学的深层意义。他的故事激励着更多学者追求更高的境界。会议现场【applaud/响起掌声】，大家【vigorously/热烈地】讨论。他用亲身经历证明，坚持的力量可以发现真理，思辨的精神可以传承文明。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。哲学【domain/领域】需要这样的智慧。`,

  '环境使命': `环境保护研究院的实验室里，环境科学家张伟正【investigate/深入研究】着生态环境的变化趋势。作为一名环境科学家，他每天都在守护地球的未来。每一个数据都需要【rigorous/严谨的】分析，每一个发现都承载着生态的【significance/重要性】。他深知环境保护的【gravity/重大】使命。实验室里【sophisticated/精密先进】的监测设备运转着，他【devote/致力于】环境研究。他【persistently/坚持不懈地】追踪数据，每天都很【intense/紧张投入】。他【always/总是】保持高度的责任感。

今天的研究任务是分析一项环境政策的效果。张伟注意到环境指标还存在【substantial/实质性的】问题，需要【comprehensive/全面】的评估。他反复收集环境数据，寻找最优的改善方案。这是一个需要【perseverance/毅力】和智慧的过程。他【never/从不】放弃对改善的追求，【continuously/持续地】优化方案。他【elaborate/详细分析】环境趋势，【collaborate/协作】团队攻关。环境研究【necessitate/需要】责任与智慧。

研究过程中，张伟遇到了一个【critical/关键性的】挑战。环境污染源头难以定位，治理方案面临困境。他【tensely/紧张地】分析污染路径，尝试了多种溯源方法。最终，他通过【innovative/创新性的】监测技术，成功定位污染源头，制定了有效治理方案。突破需要智慧。他【methodically/有条不紊地】验证方案，【ultimately/最终】找到源头。他【relieved/释然】地看到治理进展。方案【effectively/有效地】改善环境。

研究突破后，张伟开始撰写详细的环境报告。他【synthesize/综合整理】研究成果，【evaluate/评估】治理效果，【articulate/清晰阐述】改善方案。每一份报告都需要【rigorous/严谨】的把关。报告撰写需要投入。他【meticulously/细致地】核对数据，【precisely/精确地】描述发现。他【apprehensive/忧虑】但同时也【optimistic/乐观期待】。他【invest/投入】大量时间完善报告。

报告发布后，张伟的环境研究引起了社会的高度关注。公众对他的发现给予了【enthusiastic/热烈】支持，认为这是环境保护的【milestone/里程碑】。他看到了环境科学的价值。研究【remarkably/显著地】推动环境改善。他【tense/紧张】但【confident/自信】，成功发布了成果。公众【warmly/热烈地】关注环境。他【proudly/自豪地】看着治理成效。媒体【extensively/广泛地】报道。

发布后，张伟感到一种深深的【accomplishment/成就感】。守护的喜悦让他感到欣慰，但他明白，这只是环境保护的阶段性成果。他【modestly/谦逊地】接受社会的认可。成功在此【manifest/显现】。他【proudly/自豪地】看着环境改善，知道这是责任的回报。他【proceed/继续】追求更高的环境目标。每个人都为这个【achievement/成就】感到敬佩。

他明白，环境保护不仅是职业，更是守护地球的使命。他开始【contemplate/深入思考】生态问题，【investigate/深入研究】环境科学。他希望通过持续研究，为地球带来更好的未来。责任在此积累。他【respect/尊重】自然规律，【implement/实施】保护战略，【contribute/贡献】环境力量。他【actively/积极地】参与环保活动。他【frequently/频繁地】呼吁环保。

张伟开始培养年轻的环境科学家，传授研究方法和环保理念。他告诉他们："环境保护需要【responsibility/责任】和【dedication/奉献】。我们用科学的力量守护地球，用责任的意识保护家园。"他的指导帮助了许多新人成长。传承在此延续。他【patiently/耐心地】讲解，【generously/慷慨地】分享经验，【encourage/鼓励】环保精神。他【successfully/成功地】培养了多位优秀科学家。年轻科学家都受到他的【inspire/启发】。

生态守护，让张伟感受到责任的魅力和守护的价值。他决定继续深耕这个领域，用科学能力守护地球，用责任意识保护家园。这是他选择的道路，也是他热爱的使命。每一次研究，都是一次对生态的守护。这是他的责任。他【determine/决心】一生【devote/奉献】给环保事业，【protect/保护】生态环境，让地球更加【sustainable/可持续】，【establish/建立】属于自己的环保传奇。他【firmly/坚定地】相信责任的力量。他【pledge/承诺】会一直坚守使命。

某次环境科学会议上，张伟分享了他环保理念："环境是守护地球的使命。我们用科学的力量，为人类保护家园的未来。"同行们深受启发，开始思考环保的深层意义。他的故事激励着更多科学家追求更高的境界。会议现场【applaud/响起掌声】，大家【vigorously/热烈地】讨论。他用亲身经历证明，坚持的力量可以守护地球，责任的意识可以保护家园。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。环境【domain/领域】需要这样的责任。`,

  '考古揭秘': `考古研究所的文物修复室里，考古学家刘芳正【examine/仔细鉴定】着新出土的文物残片。作为一名考古学家，她每天都在揭示历史的秘密。每一件文物都需要【meticulous/细致】的鉴定，每一次发现都承载着历史的【significance/意义】。她深知考古工作的【magnitude/重大】价值。修复室里【tranquil/宁静】，她【devote/致力于】考古研究。她【persistently/坚持不懈地】分析文物，每天都很【focused/专注深入】。她【always/总是】保持高度的专业素养。

今天的考古任务是鉴定一批新出土的陶器。刘芳注意到某些文物特征还存在【ambiguous/模糊不清】的问题，需要【systematic/系统性】的鉴定。她反复比对器物特征，寻找准确的历史定位。这是一个需要【expertise/专业知识】和耐心的过程。她【never/从不】放弃对真相的追求，【continuously/持续地】完善鉴定。她【elaborate/详细分析】文物特征，【collaborate/协作】团队研究。考古工作【necessitate/需要】专业与耐心。

研究过程中，刘芳遇到了一个【substantial/重大的】挑战。关键文物的年代判定存在争议，历史定位面临困惑。她【anxiously/焦虑地】思考解决方案，尝试了多种鉴定方法。最终，她通过【innovative/创新性的】科技手段，成功确定了文物年代，揭示了历史真相。突破需要智慧。她【methodically/有条不紊地】验证鉴定，【eventually/最终】确定年代。她【thrilled/激动不已】地记录发现。鉴定【remarkably/显著地】揭示历史。

鉴定完成后，刘芳开始撰写详细的考古报告。她【synthesize/综合整理】研究成果，【evaluate/评估】历史价值，【articulate/清晰阐述】发现意义。每一份报告都需要【rigorous/严谨】的把关。报告撰写需要投入。她【meticulously/细致地】核对数据，【precisely/精确地】描述发现。她【apprehensive/忐忑不安】但同时也【optimistic/乐观期待】。她【invest/投入】大量时间完善报告。

报告发布后，刘芳的考古发现引起了学术界的高度关注。同行专家对她的发现给予了【substantial/重大】肯定，被认为是考古领域的【breakthrough/重大突破】。她看到了考古研究的价值。发现【remarkably/显著地】揭示历史。她【tense/紧张】但【confident/自信】，成功发布了成果。学术界【eagerly/热切地】关注研究。她【proudly/自豪地】看着发现意义。期刊【extensively/广泛地】报道。

发布后，刘芳感到一种深深的【accomplishment/成就感】。发现的喜悦让她感到欣慰，但她明白，这只是考古研究的阶段性成果。她【modestly/谦逊地】接受学术界的认可。成功在此【manifest/显现】。她【proudly/自豪地】看着发现影响，知道这是探索的回报。她【proceed/继续】追求更高的考古目标。每个人都为这个【achievement/成就】感到振奋。

她明白，考古研究不仅是职业，更是传承历史的使命。她开始【contemplate/深入思考】历史意义，【investigate/深入研究】考古方法。她希望通过持续研究，为人类揭示更多历史真相。知识在此积累。她【respect/尊重】历史遗产，【implement/实施】研究计划，【contribute/贡献】考古力量。她【actively/积极地】参与学术交流。她【frequently/频繁地】出席考古会议。

刘芳开始培养年轻的考古学家，传授鉴定技巧和考古理念。她告诉他们："考古是传承历史的使命。我们用专业的力量揭示真相，用探索的精神守护文明。"她的指导帮助了许多新人成长。传承在此延续。她【patiently/耐心地】讲解，【generously/慷慨地】分享经验，【encourage/鼓励】探索精神。她【successfully/成功地】培养了多位优秀考古学家。年轻考古学家都受到她的【inspire/启发】。

历史回响，让刘芳感受到发现的魅力和真相的价值。她决定继续深耕这个领域，用专业能力揭示真相，用探索精神守护文明。这是她选择的道路，也是她热爱的使命。每一次发现，都是一次对历史的探索。这是她的责任。她【determine/决心】一生【devote/奉献】给考古事业，【discover/发现】更多历史真相，让人类文明更加【complete/完整】，【establish/建立】属于自己的考古传奇。她【firmly/坚定地】相信真相的力量。她【pledge/承诺】会一直坚持探索。

某次考古学术会议上，刘芳分享了她考古理念："考古是传承历史的使命。我们用专业的力量，揭示人类文明的真相。"同行们深受启发，开始思考考古的深层意义。她的故事激励着更多考古学家追求更高的境界。会议现场【applaud/响起掌声】，大家【vigorously/热烈地】讨论。她用亲身经历证明，坚持的力量可以揭示真相，探索的精神可以守护文明。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。考古【domain/领域】需要这样的专业。`
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

    const num = String(66 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 66 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 66 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇，含高级词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事66-70，使用高级词汇）');
}

main();