const fs = require('fs');
const path = require('path');

// 故事配置（故事61-65）- 使用更高级词汇
const storyConfigs = [
  { theme: '科技创业', title: '创新之路', subtitle: '科技先锋', tags: '科技 · 创新 · 突破' },
  { theme: '外交谈判', title: '国际舞台', subtitle: '外交风云', tags: '外交 · 谈判 · 策略' },
  { theme: '医学研究', title: '疾病攻克', subtitle: '科研突破', tags: '医学 · 研究 · 发现' },
  { theme: '金融投资', title: '市场博弈', subtitle: '投资智慧', tags: '金融 · 投资 · 策略' },
  { theme: '人工智能', title: '未来科技', subtitle: '智能时代', tags: 'AI · 技术 · 未来' }
];

// 所有故事内容 - 使用更高级、更有挑战性的词汇
const storyContents = {
  '科技先锋': `科技创新中心的实验室里，研发总监李明正【scrutinize/仔细审查】着最新的技术方案。作为一名科技创业者，他每天都在探索前沿领域。每一个技术突破都需要【meticulous/细致的】分析，每一次创新都承载着行业的【anticipation/期望】。他深知科技创新的【significance/重要性】。实验室里【sophisticated/复杂精密】的设备运转着，他【devote/致力于】技术研发。他【persistently/坚持不懈地】追求创新，每天都很【intense/紧张忙碌】。他【always/总是】保持高度的专业性。

今天的研发任务是攻克一项关键技术瓶颈。李明注意到现有方案还存在【intricate/错综复杂】的问题，需要【systematic/系统性的】优化。他反复推演技术路线，寻找最佳解决方案。这是一个需要【perseverance/毅力】和智慧的过程。他【never/从不】放弃对突破的追求，【continuously/持续地】改进方案。他【elaborate/详细阐述】技术细节，【collaborate/协作】团队攻关。研发【necessitate/需要】创新与坚持。

研发过程中，李明遇到了一个【substantial/重大的】挑战。核心技术指标无法达到预期标准，整个项目面临停滞风险。他【anxiously/焦虑地】分析问题根源，尝试了多种优化策略。最终，他通过【innovative/创新性的】思维，找到了突破口，成功提升了技术性能。突破需要勇气。他【methodically/有条不紊地】验证方案，【eventually/最终】攻克难题。他【thrilled/激动不已】地记录成果。技术指标【remarkably/显著地】超越预期。

技术验证完成后，李明开始撰写详细的技术报告。他【synthesize/综合整理】实验数据，【evaluate/评估】技术优势，【articulate/清晰表达】创新价值。每一份文档都需要【rigorous/严谨的】把关。报告撰写需要投入。他【carefully/仔细地】核对数据，【precisely/精确地】描述成果。他【apprehensive/忐忑不安】但同时也【optimistic/乐观期待】。他【invest/投入】大量时间完善文档。

产品发布会上，李明向投资者展示技术创新成果。市场的【enthusiastic/热烈】反响让他感到欣慰。他的技术方案获得了行业专家的高度认可，被认为是该领域的【breakthrough/重大突破】。发布会【spectacular/精彩壮观】。他【tense/紧张】但【confident/自信】，成功地展示了成果。投资者【eagerly/热切地】关注。他【proudly/自豪地】介绍技术优势。媒体【extensively/广泛地】报道。

产品发布后，李明感到一种深深的【accomplishment/成就感】。创新的喜悦让他感到欣慰，但他明白，这只是科技创业的阶段性成果。他【modestly/谦逊地】接受业界的认可。成功在此【manifest/显现】。他【proudly/自豪地】看着市场反馈，知道这是创新的回报。他【proceed/继续】追求更高的技术目标。每个人都为这个【achievement/成就】感到振奋。

他明白，科技创新不仅是职业，更是推动社会进步的力量。他开始【contemplate/深思熟虑】技术发展趋势，【investigate/深入研究】行业动态。他希望通过持续创新，推动整个行业的变革。知识在此【accumulate/积累】。他【respect/尊重】科学规律，【implement/实施】创新战略，【contribute/贡献】技术力量。他【actively/积极地】参与行业交流。他【frequently/频繁地】出席学术会议。

李明开始培养年轻的研发人才，传授技术理念和创新方法。他告诉他们："科技创新需要【vision/远见】和【dedication/奉献精神】。我们用技术力量改变世界，用创新思维引领未来。"他的指导帮助了许多新人成长。传承在此延续。他【patiently/耐心地】讲解，【generously/慷慨地】分享经验，【encourage/鼓励】创新思维。他【successfully/成功地】培养了多位优秀工程师。年轻工程师都受到他的【inspire/启发】。

科技先锋，让李明感受到创新的魅力和突破的价值。他决定继续深耕这个领域，用技术能力推动进步，用创新思维引领变革。这是他选择的道路，也是他热爱的使命。每一次研发，都是一次对未知的探索。这是他的责任。他【determine/决心】一生【devote/奉献】给科技创新事业，【achieve/实现】更多技术突破，让行业更加【advanced/先进】，【establish/建立】属于自己的技术传奇。他【firmly/坚定地】相信科技的力量。他【pledge/承诺】会一直坚持创新。

某次科技创新峰会上，李明分享了他创新理念："科技是推动进步的力量。我们用创新的思维，引领行业的变革与发展。"同行们深受启发，开始思考科技创新的深层意义。他的故事激励着更多创业者追求更高的境界。峰会现场【applaud/响起掌声】，大家【vigorously/热烈地】讨论。他用亲身经历证明，坚持的力量可以实现突破，创新的精神可以改变世界。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。科技【domain/领域】需要这样的创新。`,

  '外交风云': `外交部谈判会议室里，外交官王华正【prepare/精心准备】着即将举行的国际会谈。作为一名资深外交官，她每天都在处理复杂的国际事务。每一次谈判都需要【strategic/战略性】的考量，每一个决策都承载着国家利益的【significance/重要性】。她深知外交工作的【gravity/重大】责任。会议室里【formal/庄严肃穆】，她【concentrate/全神贯注】于分析局势。她【early/早早】来到会议室，准备工作做得非常【comprehensive/全面】。她【always/总是】保持高度的职业素养。

今天的谈判主题涉及一项重要的国际合作议题。王华注意到谈判双方的立场还存在【substantial/实质性的】分歧，需要【tactful/巧妙得体】的协调。她反复推演谈判策略，寻找利益平衡点。这是一个需要【diplomacy/外交智慧】和耐心的过程。她【never/从不】放弃对共识的追求，【persistently/坚持不懈地】寻求突破。她【elaborate/详细阐述】中方立场，【mediate/调解】分歧点。谈判【necessitate/需要】智慧与耐心。

谈判过程中，王华遇到了一个【critical/关键性的】难题。核心利益条款无法达成一致，谈判面临破裂风险。她【tensely/紧张地】思考应对方案，尝试了多种协商策略。最终，她通过【flexible/灵活变通】的方式，提出了折中方案，成功推动了谈判进展。突破需要智慧。她【skillfully/巧妙地】运用谈判技巧，【ultimately/最终】达成妥协。她【relieved/释然】地看到进展。方案【effectively/有效地】解决分歧。

谈判间隙，王华与团队成员分析谈判态势。她【synthesize/综合分析】各方诉求，【evaluate/评估】谈判进展，【formulate/制定】后续策略。每一个决策都需要【prudent/审慎的】考量。分析需要投入。她【meticulously/细致地】梳理要点，【accurately/准确地】判断走向。她【apprehensive/忧虑】但同时也【hopeful/充满希望】。她【devote/投入】大量精力准备后续谈判。

谈判达成共识时，王华看着协议签署完成，心中感到欣慰。成功的谈判让她感到满足。各方对她的专业能力给予了高度评价，认为她是一位优秀的外交官。协议签署【historic/历史性的】。她【tense/紧张】但【confident/自信】，成功地完成了使命。各方代表【warmly/热烈地】祝贺。她【proudly/自豪地】看着协议达成。媒体【extensively/广泛地】报道此事。

谈判结束后，王华感到一种深深的【satisfaction/满足感】。外交使命的完成让她感到欣慰，但她明白，这只是职业生涯的一次任务。她【modestly/谦逊地】接受各方的赞誉。成功在此【mark/标记】。她【proudly/自豪地】看着协议成果，知道这是智慧的回报。她【continue/继续】追求更高的外交目标。每个人都为她的【achievement/成就】感到敬佩。

她明白，外交不仅是职业，更是维护国家利益的责任。她开始【contemplate/深入思考】国际局势变化，【investigate/研究分析】外交策略。她希望通过专业能力，为国家争取更多利益。经验在此积累。她【respect/尊重】国际规则，【maintain/维护】国家利益，【contribute/贡献】外交智慧。她【actively/积极地】参与国际交流。她【frequently/经常】出访各国。

王华开始培养年轻的外交人才，传授谈判技巧和外交理念。她告诉他们："外交工作需要【wisdom/智慧】和【patience/耐心】。我们用谈判技巧维护利益，用外交智慧促进合作。"她的指导帮助了许多新人成长。传承在此延续。她【patiently/耐心地】讲解，【generously/慷慨地】分享经验，【encourage/鼓励】专业成长。她【successfully/成功地】培养了多位优秀外交官。年轻外交官都受到她的【inspire/启发】。

外交风云，让王华感受到谈判的艺术和外交的价值。她决定继续深耕这个领域，用专业能力维护利益，用外交智慧促进合作。这是她选择的道路，也是她热爱的使命。每一次谈判，都是一次对智慧的考验。这是她的责任。她【determine/决心】一生【devote/奉献】给外交事业，【promote/促进】国际合作，让国家利益得到【safeguard/维护】，【establish/建立】属于自己的外交传奇。她【firmly/坚定地】相信外交的力量。她【pledge/承诺】会一直坚守使命。

某次外交培训会上，王华分享了她外交理念："外交是维护利益的桥梁。我们用谈判的智慧，促进国际间的理解与合作。"同行们深受启发，开始思考外交工作的深层意义。她的故事激励着更多外交官追求更高的境界。培训会现场【applaud/响起掌声】，大家【enthusiastically/热情地】讨论。她用亲身经历证明，坚持的力量可以达成共识，外交的智慧可以化解分歧。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。外交【domain/领域】需要这样的智慧。`,

  '科研突破': `医学研究院的实验室里，研究员陈明正【investigate/深入研究】着疾病的致病机理。作为一名医学科学家，他每天都在攻克疾病的道路上前行。每一个发现都需要【rigorous/严谨的】验证，每一项突破都承载着患者的【anticipation/期待】。他深知医学研究的【gravity/重大】意义。实验室里【sophisticated/先进精密】的设备运转着，他【devote/致力于】研究工作。他【persistently/坚持不懈地】探索机理，每天都很【intense/紧张投入】。他【always/总是】保持高度的科学态度。

今天的研究任务是分析疾病的分子机制。陈明注意到实验数据还存在【ambiguous/模糊不清】的结果，需要【systematic/系统性】的验证。他反复设计实验方案，寻找更准确的证据。这是一个需要【perseverance/毅力】和严谨的过程。他【never/从不】放弃对真理的追求，【continuously/持续地】优化实验。他【elaborate/详细设计】实验流程，【collaborate/协作】团队攻关。研究【necessitate/需要】严谨与耐心。

研究过程中，陈明遇到了一个【substantial/重大的】障碍。关键假设无法得到实验支持，研究方向面临调整。他【anxiously/焦虑地】分析实验结果，尝试了多种验证方法。最终，他通过【innovative/创新性的】实验设计，发现了新的证据链，成功推翻了原有假设，建立了新的理论框架。突破需要勇气。他【methodically/有条不紊地】验证发现，【eventually/最终】建立新理论。他【thrilled/激动不已】地记录发现。理论【remarkably/显著地】解释疾病机制。

研究突破后，陈明开始撰写学术论文。他【synthesize/综合整理】研究成果，【evaluate/评估】理论意义，【articulate/清晰阐述】发现价值。每一篇论文都需要【meticulous/细致】的撰写。论文写作需要投入。他【carefully/仔细地】核对数据，【precisely/精确地】描述发现。他【apprehensive/忐忑不安】但同时也【optimistic/乐观期待】。他【invest/投入】大量时间完善论文。

论文发表后，陈明的研究引起了学术界的高度关注。同行专家对他的发现给予了【substantial/重大】肯定，认为这是该领域的【milestone/里程碑】式突破。他看到了科学研究的价值。论文【remarkably/显著地】推动领域发展。他【tense/紧张】但【confident/自信】，成功发表了成果。学术界【eagerly/热切地】关注研究。他【proudly/自豪地】看着论文影响。期刊【extensively/广泛地】引用。

研究发表后，陈明感到一种深深的【accomplishment/成就感】。发现的喜悦让他感到欣慰，但他明白，这只是医学研究的阶段性成果。他【modestly/谦逊地】接受学术界的认可。成功在此【manifest/显现】。他【proudly/自豪地】看着研究影响，知道这是探索的回报。他【proceed/继续】追求更高的科学目标。每个人都为这个【achievement/成就】感到振奋。

他明白，医学研究不仅是职业，更是攻克疾病的使命。他开始【contemplate/深入思考】研究方向，【investigate/深入研究】疾病机制。他希望通过持续研究，为患者带来新的治疗方案。知识在此【accumulate/积累】。他【respect/尊重】科学规律，【implement/实施】研究计划，【contribute/贡献】医学力量。他【actively/积极地】参与学术交流。他【frequently/频繁地】出席学术会议。

陈明开始培养年轻的医学研究员，传授研究方法和科学理念。他告诉他们："医学研究需要【integrity/严谨正直】和【dedication/奉献精神】。我们用科学的力量攻克疾病，用研究的精神服务患者。"他的指导帮助了许多新人成长。传承在此延续。他【patiently/耐心地】讲解，【generously/慷慨地】分享经验，【encourage/鼓励】科研精神。他【successfully/成功地】培养了多位优秀研究员。年轻研究员都受到他的【inspire/启发】。

科研突破，让陈明感受到探索的魅力和发现的价值。他决定继续深耕这个领域，用科学能力攻克疾病，用研究精神服务患者。这是他选择的道路，也是他热爱的使命。每一次研究，都是一次对疾病的挑战。这是他的责任。他【determine/决心】一生【devote/奉献】给医学研究事业，【discover/发现】更多疾病机理，让患者得到更好的【treatment/治疗】，【establish/建立】属于自己的研究传奇。他【firmly/坚定地】相信科学的力量。他【pledge/承诺】会一直坚持探索。

某次医学学术会议上，陈明分享了他研究理念："医学是攻克疾病的使命。我们用科学的力量，为患者带来治疗的新希望。"同行们深受启发，开始思考医学研究的深层意义。他的故事激励着更多研究员追求更高的境界。会议现场【applaud/响起掌声】，大家【vigorously/热烈地】讨论。他用亲身经历证明，坚持的力量可以发现真理，科学的精神可以拯救生命。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。医学【domain/领域】需要这样的奉献。`,

  '投资智慧': `金融投资中心的会议室里，投资分析师张伟正【scrutinize/仔细分析】着市场动态数据。作为一名资深投资人，他每天都在分析复杂的金融市场。每一个投资决策都需要【prudent/审慎的】考量，每一笔交易都承载着资本的【significance/重要性】。他深知投资分析的【gravity/重大】责任。会议室里【sophisticated/复杂精密】的分析系统运行着，他【devote/致力于】市场研判。他【persistently/坚持不懈地】跟踪市场，每天都很【intense/紧张忙碌】。他【always/总是】保持高度的专业素养。

今天的研究任务是评估一项重大投资机会。张伟注意到市场还存在【uncertainty/不确定性】因素，需要【comprehensive/全面】的风险评估。他反复分析市场走势，寻找最优投资策略。这是一个需要【acumen/敏锐洞察】和审慎的过程。他【never/从不】放弃对价值的追求，【continuously/持续地】优化策略。他【elaborate/详细阐述】投资逻辑，【collaborate/协作】团队研判。投资【necessitate/需要】洞察与审慎。

分析过程中，张伟遇到了一个【critical/关键性的】挑战。市场出现【unprecedented/前所未有的】波动，投资判断面临考验。他【tensely/紧张地】分析市场信号，尝试了多种应对策略。最终，他通过【insightful/有洞察力】的分析，准确判断了市场走势，成功制定了应对方案。突破需要智慧。他【methodically/有条不紊地】验证判断，【ultimately/最终】准确预判。他【relieved/释然】地看到判断正确。策略【effectively/有效地】规避风险。

投资决策后，张伟开始制定详细的执行方案。他【synthesize/综合分析】市场信息，【evaluate/评估】投资风险，【formulate/制定】执行策略。每一个决策都需要【rigorous/严谨】的论证。方案制定需要投入。他【meticulously/细致地】推演情景，【precisely/精确地】计算收益。他【apprehensive/忧虑】但同时也【optimistic/乐观期待】。他【devote/投入】大量精力制定方案。

投资执行成功后，张伟看着收益增长，心中感到欣慰。成功的投资让他感到满足。客户对他的专业能力给予了高度评价，认为他是一位优秀的投资分析师。投资【remarkably/显著地】获得回报。他【tense/紧张】但【confident/自信】，成功完成了使命。客户【warmly/热烈地】感谢。他【proudly/自豪地】看着投资成果。行业【extensively/广泛地】认可。

投资成功后，张伟感到一种深深的【satisfaction/满足感】。智慧的决策让他感到欣慰，但他明白，这只是投资生涯的一次决策。他【modestly/谦逊地】接受客户的赞誉。成功在此【mark/标记】。他【proudly/自豪地】看着投资回报，知道这是智慧的回报。他【continue/继续】追求更高的投资目标。每个人都为他的【achievement/成就】感到敬佩。

他明白，投资不仅是职业，更是资本配置的艺术。他开始【contemplate/深入思考】市场规律，【investigate/研究分析】投资策略。他希望通过专业能力，为客户创造更多价值。经验在此积累。他【respect/尊重】市场规律，【maintain/维护】投资纪律，【contribute/贡献】投资智慧。他【actively/积极地】参与行业交流。他【frequently/经常】研究市场动态。

张伟开始培养年轻的投资人才，传授分析技巧和投资理念。他告诉他们："投资需要【discipline/纪律】和【patience/耐心】。我们用分析的智慧配置资本，用审慎的态度规避风险。"他的指导帮助了许多新人成长。传承在此延续。他【patiently/耐心地】讲解，【generously/慷慨地】分享经验，【encourage/鼓励】专业成长。他【successfully/成功地】培养了多位优秀分析师。年轻分析师都受到他的【inspire/启发】。

市场博弈，让张伟感受到分析的艺术和投资的价值。他决定继续深耕这个领域，用专业能力配置资本，用智慧态度创造价值。这是他选择的道路，也是他热爱的使命。每一次投资，都是一次对市场的洞察。这是他的责任。他【determine/决心】一生【devote/奉献】给投资事业，【allocate/配置】资本资源，让客户获得更好的【return/回报】，【establish/建立】属于自己的投资传奇。他【firmly/坚定地】相信智慧的力量。他【pledge/承诺】会一直坚持审慎。

某次投资培训会上，张伟分享了他投资理念："投资是资本配置的艺术。我们用分析的智慧，为客户创造可持续的价值。"同行们深受启发，开始思考投资的深层意义。他的故事激励着更多投资人追求更高的境界。培训会现场【applaud/响起掌声】，大家【enthusiastically/热情地】讨论。他用亲身经历证明，坚持的力量可以获得回报，审慎的态度可以规避风险。每个人都被他【inspire/启发】。他感到无比【proud/自豪】和【fulfill/充实】。投资【domain/领域】需要这样的智慧。`,

  '智能时代': `人工智能实验室的研发中心里，AI研究员刘芳正【develop/开发】着新一代的智能算法。作为一名AI科学家，她每天都在探索人工智能的前沿领域。每一个算法优化都需要【sophisticated/复杂精密】的设计，每一项技术突破都承载着行业的【anticipation/期望】。她深知AI研发的【significance/重要性】。实验室里【advanced/先进】的计算系统运转着，她【devote/致力于】算法研究。她【persistently/坚持不懈地】优化模型，每天都很【intense/紧张投入】。她【always/总是】保持高度的创新精神。

今天的研发任务是提升神经网络的性能效率。刘芳注意到算法还存在【substantial/实质性的】优化空间，需要【systematic/系统性】的改进。她反复设计实验方案，寻找最优的算法架构。这是一个需要【perseverance/毅力】和创新的过程。她【never/从不】放弃对突破的追求，【continuously/持续地】改进算法。她【elaborate/详细设计】网络结构，【collaborate/协作】团队攻关。研发【necessitate/需要】创新与坚持。

研发过程中，刘芳遇到了一个【critical/关键性的】挑战。模型训练效率无法达到预期，项目面临调整。她【anxiously/焦虑地】分析瓶颈原因，尝试了多种优化策略。最终，她通过【innovative/创新性的】架构设计，突破了性能瓶颈，显著提升了算法效率。突破需要勇气。她【methodically/有条不紊地】验证方案，【eventually/最终】攻克难题。她【thrilled/激动不已】地记录成果。算法性能【remarkably/显著地】超越基准。

技术突破后，刘芳开始撰写详细的研究论文。她【synthesize/综合整理】实验数据，【evaluate/评估】算法优势，【articulate/清晰阐述】创新价值。每一篇论文都需要【rigorous/严谨】的把关。论文撰写需要投入。她【carefully/仔细地】核对数据，【precisely/精确地】描述成果。她【apprehensive/忐忑不安】但同时也【optimistic/乐观期待】。她【invest/投入】大量时间完善论文。

论文发表后，刘芳的AI研究引起了学术界的高度关注。同行专家对她的算法创新给予了【substantial/重大】肯定，被认为是该领域的【breakthrough/重大突破】。她看到了技术创新的价值。论文【remarkably/显著地】推动领域发展。她【tense/紧张】但【confident/自信】，成功发表了成果。学术界【eagerly/热切地】关注研究。她【proudly/自豪地】看着论文影响。期刊【extensively/广泛地】引用。

研究发表后，刘芳感到一种深深的【accomplishment/成就感】。创新的喜悦让她感到欣慰，但她明白，这只是AI研究的阶段性成果。她【modestly/谦逊地】接受学术界的认可。成功在此【manifest/显现】。她【proudly/自豪地】看着研究影响，知道这是创新的回报。她【proceed/继续】追求更高的技术目标。每个人都为这个【achievement/成就】感到振奋。

她明白，AI研发不仅是职业，更是推动智能时代进步的力量。她开始【contemplate/深入思考】技术发展趋势，【investigate/深入研究】智能算法。她希望通过持续创新，推动整个AI领域的发展。知识在此【accumulate/积累】。她【respect/尊重】科学规律，【implement/实施】创新战略，【contribute/贡献】技术力量。她【actively/积极地】参与学术交流。她【frequently/频繁地】出席AI会议。

刘芳开始培养年轻的AI研究员，传授算法技术和创新理念。她告诉他们："AI研发需要【vision/远见】和【dedication/奉献精神】。我们用技术力量引领智能时代，用创新思维塑造未来。"她的指导帮助了许多新人成长。传承在此延续。她【patiently/耐心地】讲解，【generously/慷慨地】分享经验，【encourage/鼓励】创新思维。她【successfully/成功地】培养了多位优秀研究员。年轻研究员都受到她的【inspire/启发】。

智能时代，让刘芳感受到创新的魅力和突破的价值。她决定继续深耕这个领域，用技术能力推动进步，用创新思维引领变革。这是她选择的道路，也是她热爱的使命。每一次研发，都是一次对智能的探索。这是她的责任。她【determine/决心】一生【devote/奉献】给AI研发事业，【achieve/实现】更多算法突破，让人工智能更加【intelligent/智能】，【establish/建立】属于自己的技术传奇。她【firmly/坚定地】相信技术的力量。她【pledge/承诺】会一直坚持创新。

某次AI技术峰会上，刘芳分享了她创新理念："AI是引领智能时代的力量。我们用创新的思维，塑造人类与机器的未来。"同行们深受启发，开始思考AI技术的深层意义。她的故事激励着更多研究员追求更高的境界。峰会现场【applaud/响起掌声】，大家【vigorously/热烈地】讨论。她用亲身经历证明，坚持的力量可以实现突破，创新的精神可以改变未来。每个人都被她【inspire/启发】。她感到无比【proud/自豪】和【fulfill/充实】。AI【domain/领域】需要这样的创新。`
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

    const num = String(61 + index).padStart(2, '0');
    const safeTitle = config.title.replace(/[：:]/g, '_');
    const safeSubtitle = config.subtitle.replace(/[：:]/g, '_');

    // 生成学习版
    const learningHTML = generateLearningHTML(config, content, 61 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_学习版.html`), learningHTML);

    // 生成复习版
    const reviewHTML = generateReviewHTML(config, content, 61 + index);
    fs.writeFileSync(path.join(outputDir, `${num}_${safeTitle}_${safeSubtitle}_复习版.html`), reviewHTML);

    const wordCount = (content.match(/【\w+\/[^】]+】/g) || []).length;
    console.log(`✓ 已生成：${config.title} - ${config.subtitle} (${wordCount} 个词汇，含高级词汇)`);
  });

  console.log('\n全部5个新故事已生成完成！（故事61-65，使用更高级词汇）');
}

main();