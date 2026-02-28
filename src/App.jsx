import React from "react"
import { motion } from "framer-motion"
import { Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/site/navbar"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function App() {
  return (
    <div className="min-h-svh">
      <Navbar />

      <main className="relative overflow-hidden">
        <motion.section
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-svh flex items-center"
          style={{
            backgroundImage: 'url(/olivia-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent pointer-events-none" />
          <div className="relative container mx-auto px-6 py-16 max-w-5xl space-y-8 text-white">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
              Hi, I'm Olivia
            </h1>
            <p className="text-lg max-w-prose text-white">
              AI Strategic advisor | Content Creator | Rock Climbing Enthusiast
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="uppercase tracking-wider bg-yellow-400 text-black hover:bg-yellow-500 border border-yellow-400">
                联系我
              </Button>
              <Button
                variant="outline"
                className="uppercase tracking-wider border-white text-white bg-transparent cursor-pointer transition-transform hover:scale-105 hover:bg-transparent hover:text-white"
                onClick={() => {
                  const el = document.getElementById("about-education")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
              >
                关于我
              </Button>
              <Button
                variant="outline"
                className="uppercase tracking-wider border-white text-white bg-transparent cursor-pointer transition-transform hover:scale-105 hover:bg-transparent hover:text-white"
                onClick={() => {
                  const el = document.getElementById("resume")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
              >
                个人履历
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a aria-label="GitHub" href="#" className="hover:opacity-80 text-white">
                <Github className="size-6 text-white" />
              </a>
              <a aria-label="Twitter" href="#" className="hover:opacity-80 text-white">
                <Twitter className="size-6 text-white" />
              </a>
              <a aria-label="LinkedIn" href="#" className="hover:opacity-80 text-white">
                <Linkedin className="size-6 text-white" />
              </a>
            </div>
          </div>
        </motion.section>

        <section id="about" className="space-y-0">
          <div id="about-education" className="relative h-svh">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(/about-education.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
            <div className="relative h-full container mx-auto px-6 py-16 flex items-center">
              <div className="max-w-5xl space-y-4 text-white">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">HKU</h2>
                <p className="text-lg opacity-90">Master of Economy</p>
              </div>
            </div>
          </div>
          <div id="about-work" className="relative h-svh">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(/about-work.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
            <div className="relative h-full container mx-auto px-6 py-16 flex items-center">
              <div className="max-w-5xl space-y-4 text-white">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">AI Strategic Consultant</h2>
                <p className="text-lg opacity-90">Deloitte Associate</p>
              </div>
            </div>
          </div>
          <div id="about-creator" className="relative h-svh">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(/about-hobby.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
            <div className="relative h-full container mx-auto px-6 py-16 flex items-center">
              <div className="max-w-5xl space-y-4 text-white">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">Global Citizen</h2>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">Content Creator</h2>
              </div>
            </div>
          </div>
        </section>
        <section id="resume" className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-12">个人履历</h2>
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12">
            <div className="opacity-60 text-lg space-y-20">
              <div>教育背景</div>
              <div>工作经验</div>
              <div>实习经验</div>
            </div>
            <div className="space-y-16">
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="size-3 rounded-full bg-neutral-500" />
                    <div className="w-px flex-1 bg-neutral-500 mt-2" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-semibold flex items-baseline justify-between w-full">
                      <span>香港大学 - Master of Economics</span>
                      <span className="text-sm opacity-70">2022-2024</span>
                    </div>
                    <div className="opacity-80">专业前10% ｜ 《关于发展区块链产业的若干设想与假设》</div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="size-3 rounded-full bg-neutral-500" />
                    <div className="w-px flex-1 bg-neutral-500 mt-2" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-semibold flex items-baseline justify-between w-full">
                      <span>Deloitte - AI Strategic Consultant</span>
                      <span className="text-sm opacity-70">2024-至今</span>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 marker:text-black">
                      <li>参与多个AI战略咨询项目，包括AI行业研究报告撰写、企业人工智能成熟度评估、企业十五五AI战略蓝图规划、提示词工程设计和微调等工作</li>
                      <li>参与多个传统战略咨询项目，包括企业内部现状根因分析、企业内部财务指标分析、行业分析及规模测算、标杆企业洞察等工作</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-10">
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="size-3 rounded-full bg-neutral-500" />
                    <div className="w-px flex-1 bg-neutral-500 mt-2" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-semibold flex items-baseline justify-between w-full">
                      <span>广发证券 - 固定收益 量化研究助理</span>
                      <span className="text-sm opacity-70">2023.10 — 2024.04</span>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 marker:text-black">
                      <li>债基量化研究：使用 Python 完成多类债基/货基的量化优选评分模型，并协助完成多场面向银行客户的路演与培训</li>
                      <li>纯债研究课题：构建纯债产品标签体系，按多维度为产品打标，形成产品备选池</li>
                      <li>日常研究：撰写市场新规解读与公司财务分析，参与会议与路演，监测债基异常波动</li>
                    </ul>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="size-3 rounded-full bg-neutral-500" />
                    <div className="w-px flex-1 bg-neutral-500 mt-2" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-semibold flex items-baseline justify-between w-full">
                      <span>招商证券 - 固定收益（新财富）信用债研究助理</span>
                      <span className="text-sm opacity-70">2023.07 — 2023.09</span>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 marker:text-black">
                      <li>报告撰写：参与信用债与城投专题研报的框架构思、文字撰写、数据收集与异常波动跟踪</li>
                      <li>调研走访：按尽调清单梳理问题并与客户沟通，整理多场会议纪要与路演材料</li>
                    </ul>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="size-3 rounded-full bg-neutral-500" />
                    <div className="w-px flex-1 bg-neutral-500 mt-2" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-semibold flex items-baseline justify-between w-full">
                      <span>美团香港 KeeTa - C端 用户策略运营实习生</span>
                      <span className="text-sm opacity-70">2023.06 — 2023.09</span>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 marker:text-black">
                      <li>用户研究：独立完成 AB 实验与分层实验，设计并推进策略落地，潜客点击率提升至 5.66%，高于同期大盘 2pp</li>
                      <li>数据分析：使用 SQL 搭建活动看板，分析触达情景并优化方案</li>
                      <li>产品策划：梳理 KMRD，提出增长方案并上线多处入口与弹窗等，迭代复盘</li>
                    </ul>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="size-3 rounded-full bg-neutral-500" />
                    <div className="w-px flex-1 bg-neutral-500 mt-2" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-semibold flex items-baseline justify-between w-full">
                      <span>广发证券 - 产业研究院 大消费组 行业研究助理</span>
                      <span className="text-sm opacity-70">2022.11 — 2023.01</span>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 marker:text-black">
                      <li>培育钻石行业研究：整理行业资料与调研数据，形成研究框架与洞察</li>
                      <li>智慧家居行业研究：进行市场规模测算与 CAGR 计算，分析竞争格局与需求侧因素</li>
                    </ul>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="size-3 rounded-full bg-neutral-500" />
                    <div className="w-px flex-1 bg-neutral-500 mt-2" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-semibold flex items-baseline justify-between w-full">
                      <span>字节跳动 · 飞书 - 产品运营实习生</span>
                      <span className="text-sm opacity-70">2021.12 — 2022.02</span>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 marker:text-black">
                      <li>收集 toB 端用户反馈并识别合理需求，参与排期与优先级管理</li>
                      <li>跟踪问题与反馈数据，协同研发优化问答与支持流程，降低投诉</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-6 py-10 text-sm opacity-70">
        © {new Date().getFullYear()} Portfolio · Olivia
      </footer>
    </div>
  )
}
