---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 😀 About Me

I am currently a third-year M.S. student at the [Natural Language Processing and Knowledge Engineering (NLKE)](https://nlpr-web.ia.ac.cn/cip/english/~junzhao/index.html) Group, Institute of Automation, Chinese Academy of Sciences, advised by [Yubo Chen](https://people.ucas.ac.cn/~yubochen) and [Jun Zhao](https://people.ucas.ac.cn/~zhaojun). I am also very fortunate to work with [Xiang Yue](https://xiangyue9607.github.io) at Carnegie Mellon University. 
 My research interests include **RL Generalizability**, **Multimodal Reasoning**, and **Trustworthy LLMs**. If you are interested in my work or want to collaborate, feel free to contact me via: zhangchenlong2023\[at\]ia\[dot\]ac\[dot\]cn.


<span style="color: red;">I am actively seeking **Ph.D. positions** starting in Fall 2026.</span>


<div id="wechat-contact" style="max-width: 240px; margin: 1.5em auto; text-align: center;">
  <p style="margin-top: 0.5em; font-size: 0.9em; color: #6b7280;">Wechat: <a href="{{ '/images/wechat_qr.jpg' | relative_url }}" target="_blank" rel="noopener">Click to view QR code</a></p>
</div>


# 📖 Educations
- *2023 – Fall 2026 (Expected)*, **Institute of Automation, Chinese Academy of Sciences**, Beijing — M.S. in Pattern Recognition and Intelligent Systems (GPA: 3.82/4.0)  
- *2019 – 2023*, **Henan University**, Henan — B.S. in Software Engineering (GPA: 3.84/4.0, Rank: 1/388)


# 💻 Internships
- *Jun. 2025 – Dec. 2025*, **Language Technologies Institute - Carnegie Mellon University** — *Research Intern*, advised by [Xiang Yue](https://xiangyue9607.github.io) and [Graham Neubig](https://www.phontron.com)
- *Feb. 2025 – May. 2025*, **The Hong Kong University of Science and Technology (Guangzhou)** — *Research Intern*, advised by [Jiaheng Wei](https://sites.google.com/ucsc.edu/jiahengwei)
- *Sep. 2022 – Jul. 2023*, **NLPR, Institute of Automation, Chinese Academy of Sciences** — *Research Intern*, advised by [Pengfei Cao](https://cpf-nlpr.github.io/)

# 🔥 News
- *2025.12*: 🎉 New preprint [''On the Interplay of Pre-Training, Mid-Training, and RL on Reasoning Language Models''](https://arxiv.org/abs/2512.07783) released. PR in [X Post](https://x.com/xiangyue96/status/1998488030836044112).

- *2025.11*: 🎉 Awarded the **National Scholarship of China (top 0.2% nationwide)** by the Ministry of Education.
- *2025.09*：🎉 ''RULE: Reinforcement Unlearning Achieves Forget-retain Pareto Optimality'' is accepted to NeurIPS 2025 main. 
- *2025.02*: 🎉 ''DTELS: Towards Dynamic Granularity of Timeline Summarization'' is accepted to NAACL 2025 main.
- *2024.10*: 🎉 ''Continual Few-shot Event Detection via Hierarchical Augmentation Networks'' is accepted to COLING 2024 main.
- *2019~2023*: 🎉 Awarded the **National Scholarship of China (top 0.2% nationwide)** by the Ministry of Education ✖️ 3 times.

# 📝 Selected Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Preprint</div><img src='images/interplay.png' alt="interplay" width="100%"></div></div>
<div class='paper-box-text' markdown="1">


[**On the Interplay of Pre-Training, Mid-Training, and RL on Reasoning Language Models**](https://arxiv.org/pdf/2512.07783)  
**Charlie Zhang**, Graham Neubig, Xiang Yue

We build controlled experimental setups to disentangle how each training stage—pre-training, mid-training, and RL—contributes to a model’s reasoning ability. Our findings challenge common assumptions: RL only generates true capability gains when operating at the model’s competence boundary; mid-training is a powerful yet overlooked driver of generalization under fixed compute; and process-aware rewards curb reward hacking while enhancing reasoning fidelity. Together, this work provides a clear blueprint for building more reliable, reasoning-centric language models.
</div></div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='images/RULE.png' alt="RULE" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**RULE: Reinforcement Unlearning Achieves Forget-retain Pareto Optimality**](https://arxiv.org/pdf/2506.07171)  
**Chenlong Zhang**, Zhuoran Jin, Hongbang Yuan, Jiaheng Wei, Tong Zhou, Kang Liu, Jun Zhao, Yubo Chen

We propose RULE, an on-policy RL-based unlearning framework that performs refusal boundary optimization using only 12% forget data and 8% synthetic queries. We introduce the concept of "*naturalness*" as a novel evaluation dimension. Experimental results demonstrate that RULE achieves Pareto-optimal trade-offs between forgetting and utility.
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NAACL 2025</div><img src='images/DTELS.png' alt="DTELS" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**DTELS: Towards Dynamic Granularity of Timeline Summarization**](https://aclanthology.org/2025.naacl-long.136.pdf)  
**Chenlong Zhang**, Tong Zhou, Pengfei Cao, Zhuoran Jin, Yubo Chen, Kang Liu, Jun Zhao

We introduce DTELS, a task for timeline summarization with controllable granularity levels. Alongside, we release the DTELS-Bench dataset containing 543 topics and 55k articles annotated at three granularity levels. We further propose event-centric evaluation metrics and reveal that existing LLMs struggle with maintaining temporal consistency across granularities.
</div></div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">COLING 2024</div><img src='images/CFED.png' alt="CFED" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**Continual Few-shot Event Detection via Hierarchical Augmentation Networks**](https://aclanthology.org/2024.lrec-main.342.pdf)  
**Chenlong Zhang**, Pengfei Cao, Yubo Chen, Kang Liu, Zhiqiang Zhang, Mengshu Sun, Jun Zhao

We introduce Continual Few-shot Event Detection (CFED), a challenging task that requires continual learning of event detection with limited exemplars. To address this, we present HANet, a hierarchical augmentation network for continual few-shot event detection. By leveraging one-exemplar learning and contrastive augmentation, HANet achieves up to +8.4% micro-F1 improvement over prior methods, outperforming both full model retraining and GPT-3.5-based baselines. 
</div></div>


# 🏆 Honors and Awards

- *May 2024* Merit Student, University of Chinese Academy of Sciences  
- *Jun. 2023* Outstanding Graduate, Provincial Education Department  
- *Jun. 2023* Excellent Bachelor's Thesis Award, Henan University  
- *Dec. 2022* China National Scholarship (**Top 0.2% nationwide**), Ministry of Education  
- *Apr. 2022* Excellent Completion, National Undergraduate Innovation and Entrepreneurship Program (Project Leader)  
- *Dec. 2021* China National Scholarship (**Top 0.2% nationwide**), Ministry of Education  
- *Jan. 2021* Bluesky Scholarship (**Top 0.5%**), Henan University  
- *Dec. 2020* China National Scholarship (**Top 0.2% nationwide**), Ministry of Education  


# 🎤 Academic Services
I actively serve in the NLP community as a shared task organizer and reviewer.
- Task Organizer, **SemEval 2026**: *Abductive Event Reasoning: Towards Real-World Event Causal Inference for Large Language LLMs*
- Task Organizer, **CCKS 2025**: *Event Timeline Generation for Social Media*
- Conference Reviewer: **NLPCC 2025**, **ACL**

# 🌟 Misc
- **Basketball 🏀** and **Music 🎵** take up a big part of my free time.
- 🗿 I'm currently diving into the world of English Rock, listening to **Pink Floyd** and **Yes**. If you have any recommendations, feel free to share!


<div style="width: 250px; margin: 2em auto;">
  <p align="center" style="font-weight: bold;">🌍 Visitor Map</p>
  <script type="text/javascript" id="clstr_globe" 
    src="//clustrmaps.com/globe.js?d=F5iYzRlinAOcB7WZkENoRUksbcZwj3beEiPDfDk1OMM">
  </script>
</div>
