---
title: "Why GPU prices won't go down anytime soon"
date: "2022-06-06"
author:
  name: "Calum Bird"
  picture: "/assets/blog/authors/calum.jpg"
excerpt: "An analysis of the factors keeping GPU prices high, including deep learning demand and supply constraints."
ogImage:
  url: "/assets/blog/gpu-usage/cover.jpg"
---

I have been exposed to a lot of sensational pieces following Nvidia's stock price
plummeting 35% over the past few months, and I don't think they are accurate. A lot of
these pieces focus on the crypto crash, and how Nvidia was heavily exposed to that
particular market. This is accurate to some extent, but I don't think anybody is
accounting for where that GPU compute is going to go now.

Deep learning requires incredible amounts of compute resources, and the return on
investment for training a massive model is incredibly high. Take GPT-3 for instance, which
was trained by OpenAI for somewhere around \$10M when including research expenses.
Microsoft followed up on their \$1B investment in OpenAI by purchasing exclusive licensing
rights to GPT-3 in September 2020. It is unknown how large that licensing deal was, but I suspect that it
is safe to say that deal would itself have been north of \$100M. A 10x ROI for OpenAI,
100x if you include the $1B investment that was made prior to the licensing deal.

Let's consider the compute resources required to train GPT-3 - a model known for being
_undertrained_ relative to its size. OpenAI was known to leverage a supercomputer built
in partnership with Microsoft Azure that contained around 10,000 Nvidia V100 GPU's.
These GPU's had an MSRP of around \$11,500 at the time, and accounting for volume
discounts I suspect the pricing was closer to \$7,000 per GPU, for a total of ~\$70M. That
being said, that compute was only used for a few months out of the multi-year lifetime
of that supercomputer, hence the $10M price tag, with around \$6M of that being dedicated
to training, and the rest corresponding research and development costs. These V100 GPU's
are the top of the line silicon from Nvidia. You could build dozens of consumer-grade
SKU's out of a single V100 GPU because of the high number of imperfections in the
manufacturing process that get thrown out in pursuit of the best possible silicon chip.

Crypto mining rigs have historically used consumer-grade GPU's for running hashing
algorithms. This is effectively wasted compute on verifying transactions on the blockchain
in an extremely expensive manner. What has changed, however, is that as machine learning
has increasing applications in the consumer space, more and more consumer-level GPU's
contain the top-end silicon referred to earlier. That means that using 8 consumer GPU's
for deep learning workflows might begin to make economic sense instead of a single
enterprise GPU like the V100.

In addition to all of this, there are supply constraints. Simply put, chip fabs like TSMC
that Nvidia relies on are operating **at or above** maximum capacity, and new capacity
takes time to build. That ignores the potential for a Chinese invasion of Taiwan, which
would cause production of these chips to plummet by 65%.

To summarize, these statements appear to be true:

1. The deep learning industry has a demand for GPUs that is growing at 100% to 300% year
   over year.
2. Existing chip fabrication capacity cannot keep up with the growing demand.
3. Crypto mining businesses are looking to sell off their spare capacity as blockchains
   move to proof-of-stake instead of proof-of-work.
4. The ROI for deep learning models is much higher than the ROI felt by consumers after
   purchasing GPUs used for video games and other forms of entertainment.

If those set of statements are true, then it follows that GPUs will shift from crypto
mining into deep learning, which replaces the demand gap that was recently created. It
seems pretty clear to me that in the future, more companies will want supercomputers
like that built by OpenAI and Microsoft, with 10s of thousands of GPU's available. Even
if we move away from GPU compute in deep learning - towards more specialized chips - at a
fabrication level it will likely require the same capacity, for which deep learning as an
industry will pay much more than consumers for entertainment.

Unfortunately for individuals, this likely means that GPU prices will not go down a whole
lot. It is possible that a company like AMD may focus exclusively on the consumer level
hardware, but in a world where they can make 10x the money by mostly just changing the target
market, I suspect even they will begin to move to the enterprise space more and more. The
current price to performance ratio is likely as low as it will be for the next several
years. On the bright side, advances made in deep learning thanks to this shift in demand
for GPUs will very likely improve the lives of people around the world to an unprecedented
extent. The downside is that these improvements will be delayed a couple years from the
initial training runs, instead of the instant gratification that entertainment delivers.
