'use client';

import React from 'react';
import { Trophy, Flame, Disc, Flag, Zap, Award, PlayCircle, Gamepad2, Shield } from 'lucide-react';
import { SportsCardThumbnail } from './GraphicAssets';

interface TrendingGamesProps {
  onOpenGetId?: () => void;
}

export default function TrendingGames({ onOpenGetId }: TrendingGamesProps) {
  const games = [
    {
      title: "Cricket (IPL, T20, World Cup)",
      buttonLabel: "Explore Cricket",
      badge: "In-Play Live",
      imageSrc: "/images/cricket.jpg",
      icon: <Trophy className="w-3.5 h-3.5" />,
      desc: "Place live odds on in-play cricket markets including match-winner, session runs, top batsman, and fall of wicket across every major tournament, IPL, and ICC World Cup with second-by-second updates.",
    },
    {
      title: "Football (Premier League, LaLiga, ISL, FIFA)",
      buttonLabel: "Explore Football",
      badge: "Top Fixtures",
      imageSrc: "/images/football.jpg",
      icon: <Flag className="w-3.5 h-3.5" />,
      desc: "Comprehensive match markets on English Premier League, UEFA Champions League, LaLiga, and international fixtures with options for match outcomes, handicap lines, and player props.",
    },
    {
      title: "Tennis (Wimbledon, ATP, Australian Open)",
      buttonLabel: "Explore Tennis",
      badge: "Grand Slam",
      imageSrc: "/images/tennis.jpg",
      icon: <Disc className="w-3.5 h-3.5" />,
      desc: "Bet on set winners, match totals, and game handicaps with dynamic odds fluctuating live across the ATP, WTA, Wimbledon, and Australian Open tours.",
    },
    {
      title: "Horse Racing (Live Track Cards)",
      buttonLabel: "Explore Racing",
      badge: "Instant Settle",
      imageSrc: "/images/promo-services.jpg",
      icon: <Flame className="w-3.5 h-3.5" />,
      desc: "Select win, place, or forecast positions across domestic and premier global race cards. Settlements occur within seconds after the official race finish.",
    },
    {
      title: "Badminton (BWF Tournaments)",
      buttonLabel: "Explore Badminton",
      badge: "Skill Markets",
      imageSrc: "/images/promo-official.jpg",
      icon: <Zap className="w-3.5 h-3.5" />,
      desc: "Follow international BWF tournaments, backing match winners, set outcomes, and total points in fast-paced, skill-based international matchups.",
    },
    {
      title: "Kabaddi (Pro Kabaddi League, World Cup)",
      buttonLabel: "Explore Kabaddi",
      badge: "Indian Favorite",
      imageSrc: "/images/promo-whatis.jpg",
      icon: <Award className="w-3.5 h-3.5" />,
      desc: "Engage in thrilling Indian kabaddi action. Place live wagers on raid points, team totals, and super tackles throughout PKL seasons and international matches.",
    },
    {
      title: "Cards (Rummy, Poker, Teen Patti)",
      buttonLabel: "Explore Cards",
      badge: "Live Dealers",
      imageSrc: "/images/cards.jpg",
      icon: <PlayCircle className="w-3.5 h-3.5" />,
      desc: "Step into classic live dealer card rooms featuring Teen Patti, Andar Bahar, Texas Hold'em Poker, and Point Rummy with HD streams and verified fair dealing.",
    },
    {
      title: "Slots (Jackpot Themes)",
      buttonLabel: "Explore Slots",
      badge: "Megaways",
      imageSrc: "/images/promo-whatis.jpg",
      icon: <Gamepad2 className="w-3.5 h-3.5" />,
      desc: "Spin across hundreds of themed video slots and progressive jackpots featuring high RTP rates, quick bonus rounds, and mobile-optimized interfaces.",
    },
    {
      title: "Matka & FIFA eSports",
      buttonLabel: "Explore Matka",
      badge: "Fast Results",
      imageSrc: "/images/promo-services.jpg",
      icon: <Shield className="w-3.5 h-3.5" />,
      desc: "Enjoy traditional Indian number games with transparent rules alongside round-the-clock pro simulated FIFA eSports matches with instant betting rounds.",
    },
  ];

  return (
    <section id="trending-games" className="w-full bg-[#1b1e2b] py-12 md:py-16 scroll-mt-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141c] p-6 shadow-2xl md:p-10">
          {/* Header Pill */}
          <div className="mb-4 text-center">
            <div className="inline-block rounded-2xl border border-amber-500/50 bg-[#181a24] px-8 py-3 shadow-lg shadow-amber-500/10">
              <h2 className="text-lg font-extrabold tracking-tight text-white md:text-xl font-sans">
                Top Trending Games on All Panel Exch
              </h2>
            </div>
          </div>

          <p className="mx-auto mb-10 max-w-4xl text-center text-xs md:text-sm text-gray-300 leading-relaxed">
            While cricket takes center stage—offering high-liquidity in-play exchange markets—our platform delivers rich variety across football, tennis, kabaddi, horse racing, cards, slots, and interactive live dealer gaming.
          </p>

          {/* 9 Alternating Cards */}
          <div className="space-y-6">
            {games.map((game, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="rounded-3xl border-2 border-amber-500/40 bg-[#0c0d12] p-6 shadow-xl transition duration-300 hover:border-amber-400"
                >
                  <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
                    {/* Visual on Left for Even, Right for Odd */}
                    {isEven ? (
                      <>
                        <div className="flex justify-center md:col-span-4">
                          <SportsCardThumbnail
                            sport={game.title.split(' ')[0]}
                            imageSrc={game.imageSrc}
                            badge={game.badge}
                            icon={game.icon}
                          />
                        </div>
                        <div className="space-y-3 text-center md:col-span-8 md:text-center">
                          <div className="inline-block rounded-xl border border-amber-500/50 bg-[#181a24] px-6 py-2">
                            <h3 className="text-base font-extrabold text-white md:text-lg">
                              {game.title}
                            </h3>
                          </div>
                          <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
                            {game.desc}
                          </p>
                          <div>
                            <button
                              onClick={onOpenGetId}
                              className="inline-block rounded-lg border border-amber-400 bg-[#facc15] px-6 py-2 text-xs font-black text-black shadow transition hover:bg-[#eab308] active:scale-95"
                            >
                              {game.buttonLabel}
                            </button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-3 text-center md:col-span-8 md:text-center order-2 md:order-1">
                          <div className="inline-block rounded-xl border border-amber-500/50 bg-[#181a24] px-6 py-2">
                            <h3 className="text-base font-extrabold text-white md:text-lg">
                              {game.title}
                            </h3>
                          </div>
                          <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
                            {game.desc}
                          </p>
                          <div>
                            <button
                              onClick={onOpenGetId}
                              className="inline-block rounded-lg border border-amber-400 bg-[#facc15] px-6 py-2 text-xs font-black text-black shadow transition hover:bg-[#eab308] active:scale-95"
                            >
                              {game.buttonLabel}
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-center md:col-span-4 order-1 md:order-2">
                          <SportsCardThumbnail
                            sport={game.title.split(' ')[0]}
                            imageSrc={game.imageSrc}
                            badge={game.badge}
                            icon={game.icon}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
