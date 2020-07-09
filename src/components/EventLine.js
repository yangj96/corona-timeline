import React from "react";
import { Spin, Timeline } from "antd";
import "../App.css";
import EventModal from "./EventModal";
import GlobeDiv from "./GlobeDiv";

const typeColorDict = {
  0: "yellow",
  1: "blue",
  2: "orange",
  3: "purple",
  4: "red",
  5: "green",
};

class EventLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      visible: false,
      loading: true,
      count: 0,
      selectCountry: "",
      events: [],
    };
  }

  componentWillMount() {
    fetch(`http://39.97.176.70:8080/test_timeline/homepage`, {
      method: "GET",
      mode: "cors",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        this.setState({
          // isfirst: response.isfirst,
          // islast: response.islast,
          count: response.count,
          events: response.events,
          loading: false
        });
      })
      .catch((error) => {
        console.log(error);
        let response = {
          count: 58,
          events: [
            {
              time: "2020-6-27",
              title:
                "Spain discovers coronavirus in waste water collected on March 12, 2019",
              country: "China",
              disc:
                "Researchers at the University of Barcelona, one of Spain's most prestigious universities, said on June 26 that they had detected the presence of the novel coronavirus in waste water samples collected on March 12, 2019.\n\"These results, sent to a high impact journal and published in the archive medRxiv, suggest the infection was present before knowing about any case of COVID-19 in any part of the world,\" the statement said.\nThe study was led by researchers from the Enteric Virus Laboratory of the University of Barcelona in collaboration with the public-private company Aigues de Barcelona, which is responsible for managing the water cycle in Barcelona's metropolitan area.",
              type: "1",
              id: 1,
            },
            {
              time: "2020-6-29",
              title:
                "COVID-19 Global Roundup: 10 million infections and 500,000 deaths",
              country: "China",
              disc:
                "/APEditor's note: This is the 85th article in the COVID-19 Global Roundup series.\nThe world surpassed two sobering coronavirus milestones Sunday 鈥?500,000 confirmed deaths, 10 million confirmed cases 鈥?and hit another high mark for daily new infections as reopenings were rolled back and governments warned that the worse news could be yet to come.\nTo date, more than 10 million confirmed cases have been reported globally.\nThe World Health Organization (WHO) also announced another daily record in the number of confirmed coronavirus cases across the world 鈥?topping over 189,000 in a single 24-hour period.\nThis is the first time that the Pence has publicly acknowledged the use of facial masks during the coronavirus pandemic.",
              type: "4",
              id: 2,
            },
            {
              time: "2020-6-29",
              title: "Washington's 'narrative warfare' on Beijing",
              country: "China",
              disc:
                'The article sheds some light on how the "warfare of narratives" is taking shape and provides a historical context of such a "war."\nThe "narrative warfare" against China has become a core component of the Trump administration\'s China policy and it is launched with clear inter-agency coordination.\nDuring the Cold War, the U.S. paid heavy attention to exerting pressure on the former Soviet Union through mass communication.\nHistorians on the Cold War history found that organizations such as Harvard University, Massachusetts Institute of Technology, and Asia Society have all participated in government-led psychological warfare against socialist countries amid the Cold War.\nWith the election fast approaching, both parties in the U.S. have been playing up the "China threat" narrative as the coronavirus pandemic ravages the country.',
              type: "1",
              id: 3,
            },
            {
              time: "2020-6-23",
              title: "Can we eat PepsiCo potato chips anymore?",
              country: "China",
              disc:
                "Feng Zijian, deputy director of the Chinese Center for Disease Control and Prevention, said there's no evidence showing PepsiCo's potato chips have been contaminated with the coronavirus.\n\"For dry foods like the chips, the virus can only last for a very short time under room temperature.\nPepsiCo said all staff at its food factory in Beijing's Daxing District are home isolating after eight COVID-19 infections were reported at the factory on Saturday.\nRead more: PepsiCo says all staff at its Beijing factory are home isolatingCan people eat outside now?\nEarlier this week, a meat processing plant in North Rhine-Westphalia, Germany reported an outbreak of the novel coronavirus when 400 workers tested positive.",
              type: "3",
              id: 4,
            },
            {
              time: "2020-6-27",
              title:
                "Japanese couple hold cloud wedding amid COVID-19 outbreak",
              country: "China",
              disc:
                "A 26-year-old local and his bride in Japan have held a socially distanced wedding at a studio, where they livestreamed the entire event, which was attended only by the officiator and staff members.\nNearly 160 guests attended the wedding remotely and interacted with the bride and the groom via video link.\nSince the start of the pandemic, some companies have shifted their businesses to cloud weddings in response to a plunge in the revenue of the wedding industry.",
              type: "3",
              id: 5,
            },
            {
              time: "2020-6-26",
              title:
                "COVID-19 tribute: Historic pavilions lit up on Duanwu Festival",
              country: "China",
              disc:
                "Eighteen historic pavilions lit up simultaneously across China at 19:30 on Duanwu Festival Thursday.\nThe event was organized as a tribute to frontline COVID-19 heroes, wishing peace and prosperity to the country.",
              type: "4",
              id: 6,
            },
            {
              time: "2020-6-29",
              title:
                "China's first COVID-19 mRNA vaccine starts phase I clinical trial",
              country: "China",
              disc:
                "The first clinical trial of China's first COVID-19 mRNA vaccine is underway in east China's Hangzhou City.\nOn Monday afternoon, volunteers received their first dose at Shulan Hospital.\nThe project started enrolling volunteers on June 23, and plans to recruit 168 healthy individuals, half of them aged 18 to 59 years old and the other half aged at least 60 years, to evaluate the safety and tolerance of the new coronavirus (SARS-CoV-2) mRNA vaccine.\nThe hospital posted a recruiting announcement on its account on WeChat, a social media platform, on June 24.",
              type: "3",
              id: 7,
            },
            {
              time: "2020-6-25",
              title:
                "The Global Guardians: The Afro-Ecuadorian community fighting COVID-19",
              country: "China",
              disc:
                "Lucciola Gonzalez lives in an Afro-Ecuadorian community in south of Guayaquil.\nIt is a place where daily necessities are in short supply and the crime rate is high.\nApart from her normal job, she works as a coordinator of a foundation which helps Afro-Americans in South America suffering from the COVID-19 pandemic.\nShe has a very simple goal: If people in her community are fed, they would not be committing crimes and will not throw their lives away.",
              type: "4",
              id: 8,
            },
            {
              time: "2020-5-22",
              title:
                "Analysis: It's bad timing for China-U.S. trade war to flare up again",
              country: "China",
              disc:
                "But the pandemic has left the global economy in a much more precarious position than it was when the two countries began sparring over trade two years ago.\nNearly three million more American people filed for unemployment benefits in the week ending May 9, according to the U.S. Department of Labor as the COVID-19 pandemic continues to batter the labor market.\nThat has been somewhat in uncertainty allowing for the lackluster global economy, Trump's aggressive rhetoric against China over COVID-19, and China's dented consumer demand.\n\"Look, I'm having a very hard time with China,\" Trump said during a phone interview Friday with 'Fox and Friends.'\nAn escalation of trade tensions could even morph into destructive conflicts that drag down the world's recovery from the pandemic and retard critical technological innovations, CNN reported.",
              type: "6",
              id: 9,
            },
            {
              time: "2020-6-28",
              title:
                "Beijing completes construction of 16-room COVID-19 testing lab",
              country: "China",
              disc:
                "The construction of a mobile, inflatable laboratory, named Huoyan or Fire Eye, for conducting COVID-19 tests in Beijing was completed on Saturday.\nThe facility has 16 rooms, up from only nine on Tuesday.\nFinished within a week, the lab can handle 100,000 nucleic acid tests a day.",
              type: "2",
              id: 10,
            },
            {
              time: "2020-6-29",
              title:
                "Western media lies about COVID-19 and China's Xinjiang (1)",
              country: "China",
              disc:
                'Did central China\'s Wuhan City really operate outbound flights during its COVID-19 lockdown, as claimed by the Sunday Times?\nHave millions of Uygurs been put into "re-education camps" in Xinjiang?\nLee Barrett, a British citizen living in China, exposes Western media lies about China and advises people to open their eyes and check facts instead of blindly believing all Western media reports.',
              type: "4",
              id: 11,
            },
            {
              time: "2020-6-27",
              title:
                "Pelosi: Trump administration failed miserably on COVID-19 response",
              country: "China",
              disc:
                'U.S. House Speaker Nancy Pelosi on Thursday slammed President Donald Trump\'s actions in response to COVID-19 crisis, saying the Trump administration "has failed miserably."',
              type: "5",
              id: 12,
            },
            {
              time: "2020-6-24",
              title: "Special COVID-19 sampling cabins put into use in Beijing",
              country: "China",
              disc:
                "More than 7,400 medical personnel in Beijing have collected samples for nucleic acid tests from more than 2.34 million people between June 12 and 21 following a resurgence of COVID-19 in the city.\nSpecial cabins are used to provide better conditions for nucleic acid sampling in the high summer temperatures and improve the medical staff's level of comfort.\nEach cabin is equipped with air conditioning, ultraviolet sterilization capability and a central ventilation system.\nWith the assistance of the central ventilation system, positive pressure can be formed inside the cabin, ensuring a clean environment where medical workers can collect samples without wearing protective suits.",
              type: "1",
              id: 13,
            },
            {
              time: "2020-6-24",
              title:
                "COVID-19 Frontline Ep. 68: Can recurring patients spread virus?",
              country: "China",
              disc:
                "As the coronavirus pandemic continues to wreak havoc around the world, Brazil has the second-highest number of confirmed cases in the world behind the United States.\nCGTN invites pulmonary and critical care experts from Peking Union Medical College Hospital and Guang'anmen Hospital under the China Academy of Chinese Medical Sciences to exchange experiences with their Brazilian counterparts.\nDr Zhou Xiang, deputy director of the Critical Care Medicine at Peking Union Medical College Hospital, raises a question about patients who keep testing positive after treatment and how to treat them.",
              type: "1",
              id: 14,
            },
            {
              time: "2020-6-23",
              title:
                "China-EU summit: Both sides send positive signals on cooperation",
              country: "China",
              disc:
                "Chinese and European leaders held their annual summit via video conferencing on June 22, affirming their commitment to expanding economic ties through closer cooperation.\nThis comes at a time when both sides are looking to gradually get the post-COVID-19 operations back on track.",
              type: "1",
              id: 15,
            },
            {
              time: "2020-6-23",
              title: "Can eating fish infect you with COVID-19?",
              country: "China",
              disc:
                "Sushi, fish & chips and gravlax are some of our favorite dishes.\nBut what if one day you wake up, and you can't eat fish anymore?\nXinfadi, Beijing's largest food market, was shut down after the coronavirus was found on a chopping board cutting up imported salmon, sparking questions on whether the fish can spread the virus.\nPneumonia is a disease that attacks the lungs, but salmon, as we know, do not even have lungs.\nIs it true that fish can carry the coronavirus?",
              type: "3",
              id: 16,
            },
            {
              time: "2020-6-22",
              title:
                "Counter protests in Brazil's capital as COVID-19 deaths pass 50,000",
              country: "China",
              disc:
                'Brazil on Sunday said it had registered more than 50,000 deaths from the coronavirus outbreak as well as about 1 million infections, as the second worst-affected country in the world struggles to control the disease.\nPresident Jair Bolsonaro, who has famously compared the virus to a "little flu," has clashed with state and local authorities over their use of stay-at-home measures and business closures to contain it.\nHundreds of people gathered to call for Bolsonaro\'s impeachment.',
              type: "2",
              id: 17,
            },
            {
              time: "2020-6-27",
              title:
                "Dr. Peter Hotez on Covid-19 task force briefings: 'Stop screwing around'",
              country: "America",
              disc:
                "Dr. Peter Hotez tells CNN's Victor Blackwell that the White House coronavirus task force needs to improve their briefings or risk losing the confidence of the general public.",
              type: "3",
              id: 18,
            },
            {
              time: "2020-6-27",
              title:
                "Second Faribault Prison Inmate Dies After Testing Positive For COVID-19",
              country: "America",
              disc:
                "Quarantine Cooking: Your Essential Nonstick Cookware GuideStep up your quarantine cooking with this guide to nonstick cookware.\nHow To: 6 Easy Steps To Make Homemade Soft PretzelsLearn how to make your own homemade soft pretzels with these six easy steps!\n5 Vodka Sauce Recipes To Try This WeekAnd would you miss it if it wasn't there?\nTry These Make-Ahead Freezer Meals Perfect For WeeknightsSet yourself up for easy weeknight dinners no matter what!\nQuarantine Recipes: How To Make Homemade BagelsSee how to make your own homemade bagels while stuck inside during quarantine.",
              type: "2",
              id: 19,
            },
            {
              time: "2020-6-23",
              title:
                "Fugaku, the world's fastest computer, is researching the spread of Covid-19",
              country: "America",
              disc:
                'Hong Kong (CNN Business) For the first time in years, Japan has the fastest supercomputer in the world and it\'s being used to research the spread and treatment of the novel coronavirus.\nFujitsu FJTSF Fugaku, which was developed byand government research institute Riken, ranked first in the Top500 list of global supercomputers, Fujitsu and Riken announced on Tuesday.\nThe Top500 measures benchmarks such as processing speed and the performance of computing used in artificial intelligence and deep learning.\nFugaku, the fastest supercomputer in the world, is being used to research the spread and treatment of Covid-19.\nThe leading-edge technology developed for Fugaku will hopefully "contribute to major advances on difficult social challenges such as Covid-19," Satoshi Matsuoka, director of the Riken Center for Computational Science, said in a statement.',
              type: "3",
              id: 20,
            },
            {
              time: "2020-6-30",
              title:
                "California Gov. Newsom orders bars closed in counties including Los Angeles, citing coronavirus",
              country: "America",
              disc:
                'Gavin Newsom on Sunday ordered bars to close in counties including Los Angeles, while recommending closures in some other counties, citing the spread of the coronavirus.\nThe order from Newsom, a Democrat, affected the counties of Fresno, Imperial, Kern, Kings, San Joaquin, Tulare, and Los Angeles -- the most populous in the United States.\nState officials have asked at least eight other counties to issue local health orders closing bars.\n"COVID-19 is still circulating in California, and in some parts of the state, growing stronger," Newsom announced in a written statement.\nCalifornia, like other states, has recorded a startling increase in cases, casting doubt on whether to continue the course on re-opening the economy.',
              type: "6",
              id: 21,
            },
            {
              time: "2020-6-30",
              title:
                "Amid coronavirus pandemic, pediatrics group urges 'goal' of students 'physically present in school' this fall",
              country: "America",
              disc:
                "In its “COVID-19 Planning Considerations: Guidance for School Reentry,” the AAP laid out its “key principles” for school reentry policies.\n“With the above principles in mind, the AAP strongly advocates that all policy considerations for the coming school year should start with a goal of having students physically present in school,” the AAP wrote.\nBack in May, President Trump urged the reopening of schools throughout the U.S. as most remained closed to limit the coronavirus spread and protect the health of students during the pandemic.\nThe AAP’s urging came amid a resurgence of coronavirus cases across the country, with Texas and Florida rolling out new restrictions.\nCORONAVIRUS INFECTS 60 UNIVERSITY OF TEXAS STUDENTS ON SPRING BREAK TRIP TO MEXICO“COVID-19 has taken a very swift and very dangerous turn in Texas over just the past few weeks,” said Gov.",
              type: "5",
              id: 22,
            },
            {
              time: "2020-6-30",
              title:
                "Jazz star Rudy Gobert dealing with coronavirus side effects 3 months after diagnosis",
              country: "America",
              disc:
                "Rudy Gobert was the first NBA player to test positive for coronavirus back in March -- and over three months later, the Utah Jazz star says he still hasn’t fully recovered.\nGobert told L’Equipe he hasn’t recovered his sense of smell.\nI spoke to specialists, who told me that it could take up to a year,” Gobert said via HoopsHype.\nUTAH JAZZ STAR SAYS CAMERA CAUGHT TEENAGER PEEING ON HIS DRIVEWAYGobert's ordeal marked a bad sign for other coronavirus patients waiting for their own symptoms to diminish.\nThe Jazz (41-23) have been in fourth place in the loaded Western Conference.",
              type: "5",
              id: 23,
            },
            {
              time: "2020-6-30",
              title:
                "Worldwide coronavirus deaths pass 500,000 mark, Johns Hopkins University research shows",
              country: "America",
              disc:
                "The number of coronavirus deaths worldwide passed the 500,000 mark on Sunday, with more than a quarter of all deaths occurring in the United States, according to Johns Hopkins University.\n1 nation in both confirmed infections and deaths, with 2.5 million cases and more than 125,000 fatalities, according to the university’s tally.\n2 behind the U.S. in both confirmed cases and total deaths, with 1.3 million infections and over 57,000 deaths.\nGLOBAL CORONAVIRUS INFECTIONS PASS 10M MARK, DATA SHOWSRounding out the top five nations in deaths were the United Kingdom (43,500); Italy (34,700); and France (29,700).\nMeanwhile, China reported no new deaths Sunday, leaving its reported total at more than 4,600 among over 84,700 confirmed cases.",
              type: "4",
              id: 24,
            },
            {
              time: "2020-6-30",
              title:
                "Pence commits resources after Texas governor notes coronavirus outbreak's 'very swift and very dangerous turn'",
              country: "America",
              disc:
                "Vice President Mike Pence pledged additional resources and testing Sunday after Texas Gov.\nGreg Abbott described “the very swift and very dangerous turn” of the coronavirus.\nPence had canceled appearances in Florida and Arizona as each state has seen a sharp rise in new coronavirus cases.\nHowever, a representative for Pence said the vice president still planned to travel to Texas, Florida and Arizona to meet with governors.\nOverall, Texas has confirmed some 149,000 cases, as well as over 2,300 deaths.",
              type: "2",
              id: 25,
            },
            {
              time: "2020-6-30",
              title:
                "GOP senator claims China is using coronavirus pandemic to make power grabs in Asia",
              country: "America",
              disc:
                "Sen. Tom Cotton, R-Ark., accused China on Sunday of using the coronavirus pandemic as a cover to make power grabs in contested regions along its borders.\nThey've taken aggressive action against our partners, countries like the Philippines, Malaysia, Vietnam.\nIn July 2016, an international arbitration tribunal invalidated China’s vast historical claims to the waters based on UNCLOS.\nIn recent months, China has come under fire for what rival claimants say were aggressive actions in the disputed waters as countries were scrambling to deal with the coronavirus.\nThe Philippines backed Vietnam and protested new territorial districts announced by China in large swaths of the sea.",
              type: "1",
              id: 26,
            },
            {
              time: "2020-6-30",
              title:
                "British PM Boris Johnson does pushups as he preps UK recovery plan, claims he's 'fit as a butcher's dog'",
              country: "America",
              disc:
                "British PM Boris Johnson declared himself “fit as a butcher’s dog” as he boasted about both his health and his plans for the U.K.’s economic recovery from the coronavirus pandemic.\nJohnson spoke with The Mail on Sunday, listing a number of measures that he saw as the way forward for his country.\n“Never felt better.”The prime minister said he planned to use a major speech on Tuesday to continue outlining his plan for the U.K.’s recovery.\n“If COVID was a lightning flash, we’re about to have the thunderclap of the economic consequences.”He continued, “We’re going to be ready.\nDespite the likely questions over the bill for such works, Johnson repeated that his government would not return to the austerity policies seen under former Prime Minister David Cameron.",
              type: "6",
              id: 27,
            },
            {
              time: "2020-6-30",
              title:
                "South Korea struggles with new spikes, but WHO disputes claim of 'second wave'",
              country: "America",
              disc:
                'South Korea has confirmed dozens of new coronavirus cases in the past 24 hours as it continues to struggle with a spike in new cases, but world health officials dispute the claim of a "second wave."\nAs the world crossed 10 million cases of COVID-19, South Korea has seen spikes over the past few weeks.\nThe continued development of new clusters led KCDC director Jeong Eun-kyeong last week to declare the nation was suffering a “second wave” of infections.\n"Then we see that the second wave, which was triggered by the May holiday, has been going on."\n"We originally predicted that the second wave would emerge in fall or winter.',
              type: "1",
              id: 28,
            },
            {
              time: "2020-6-30",
              title: "Coronavirus giving at-home summer camps a boost",
              country: "America",
              disc:
                "Due to the coronavirus pandemic, popular summer plans like vacations, sporting leagues and summer camps have been canceled.\nContinue Reading BelowFor busy parents who bank on day camps to occupy their kids over the summer, at-home solutions are gaining popularity.\nMySuperSitter CEO Seymour Gregorio told FOX Business’ Neil Cavuto on Monday that his company’s at-home summer camp program is taking off.\n“And each membership has about four to five families involved.”FRAZZLED PARENTS FIND $39K SUBSTITUTE FOR SHUTTERED SUMMER CAMPSThe at-home camp includes certified instructors and sets up personalized programs to fit each individual lifestyle.\nGET FOX BUSINESS ON THE GO BY CLICKING HERE“What we're really focused on now is giving each family specialized attention towards their kids,” he said.",
              type: "2",
              id: 29,
            },
            {
              time: "2020-6-28",
              title:
                "Rev. Billy Cerveny: A sermon during coronavirus pandemic – God didn’t create us to be alone",
              country: "America",
              disc:
                "The third day saw the same T-shirt as the second day.\nOn the fourth day I caught myself having a conversation with the dog and on the fifth day with myself.\nBILLY CERVENY: A SERMON OF HOPE AS CORONAVIRUS PANDEMIC CONTINUES AND CHURCHES REMAIN EMPTYLoneliness affects us deeply and left unchecked it is toxic.\nThe first thing Adam and Eve did when sin entered the world was dive into the trees to hide from God (Gen 3:7-8).\nWhile the first thing Adam and Eve might have done was go into hiding, the first thing God did was call them out of it (Gen 3:9).",
              type: "5",
              id: 30,
            },
            {
              time: "2020-6-30",
              title:
                "Florida bans alcohol consumption at bars as coronavirus cases rise among younger demographics in the state",
              country: "America",
              disc:
                "Florida on Friday announced a ban of on-premise alcohol consumption at bars, just after the state Department of Health released daily coronavirus figures showing its count increased by nearly 9,000 cases -- more than 3,400 cases up from the previous daily increase.\nFLORIDA OFFICIALS FIGHTING BOTH CORONAVIRUS AND WEST NILE: REPORTFlorida now has nearly 123,000 cases and almost 3,400 coronavirus-related deaths.\nRon DeSantis said during a news briefing Friday that he does not believe enforcing face mask rules will help.\nPence was asked if he sees a correlation with the recent spikes in states such as Florida, Texas and Arizona with their early reopening strategies.\n“But frankly, in the case of each of these states, they reopened, in some cases, almost two months ago.”The Associated Press contributed to this report.",
              type: "5",
              id: 31,
            },
            {
              time: "2020-6-30",
              title:
                "Nearly half of all coronavirus deaths in US occurred inside nursing homes: report",
              country: "America",
              disc:
                "Nearly half of all deaths from the coronavirus in the United States have occurred at nursing homes and other long-term care facilities, according to new reports.\nThe rate of cases to deaths from such facilities has been disproportionate: while only 11 percent of positive cases – around 282,000 – have occurred at nursing homes and long-term care facilities, about 43 percent of deaths – or 54,000 deaths – have come from the same, the New York Times reported.\nAccording to the data, the states with the highest number of deaths in nursing homes were New York, New Jersey, Massachusetts and Pennsylvania – all of which recorded more than 4,000 deaths in nursing homes.\nCLICK HERE FOR COMPLETE CORONAVIRUS COVERAGENursing home populations are at higher risk for infection and death from the coronavirus, experts have said.\nEarly during the crisis, he required that nursing homes accept COVID-19 patients released from hospitals.",
              type: "3",
              id: 32,
            },
            {
              time: "2020-6-30",
              title: "Global coronavirus infections pass 10M mark, data show",
              country: "America",
              disc:
                "Confirmed cases of the novel coronavirus surpassed the 10 million mark early Sunday, according to Johns Hopkins University.\nMeanwhile, global deaths attributed to the virus approached the 500,000 mark, the university’s Coronavirus Resource Center says on its website.\nCLICK HERE FOR COMPLETE CORONAVIRUS COVERAGEThe United States remained the No.\n1 nation in both confirmed infections and deaths, with 2.5 million cases and more than 125,000 fatalities.\n2 behind the United States in both infections and deaths, with 1.3 million confirmed cases and more than 57,000 fatalities.",
              type: "4",
              id: 33,
            },
            {
              time: "2020-6-30",
              title:
                "Massachusetts report on 76 veterans home deaths describes coronavirus errors; boss fired",
              country: "America",
              disc:
                "Problems at a Massachusetts veterans home -- where 76 deaths were linked to a coronavirus outbreak -- began when patients from two dementia units were combined into one, a 174-page state report says.\nThe veterans home’s superintendent, Bennett Walsh, was notified as early as March 12 that any patients displaying coronavirus symptoms should be isolated, the report says.\nWalsh, a Marine Corps combat veteran, was suspended with pay March 30 but was fired Wednesday after the state report was made public, according to the news outlet.\nAn attorney for Walsh pushed back on how his client was portrayed in the state’s report, according to the news outlet.\n— William Bennett, attorney for fired superintendent of veterans homeBennett is also Walsh’s uncle and a former district attorney in Hampden County, the MassLive.com report said.",
              type: "1",
              id: 34,
            },
            {
              time: "2020-6-29",
              title: "Maps show explosive growth of coronavirus in US",
              country: "America",
              disc:
                "Chat with us in Facebook Messenger.\nFind out what's happening in the world as it unfolds.",
              type: null,
              id: 35,
            },
            {
              time: "2020-6-29",
              title:
                "Fauci: Covid-19 vaccine might not get US sufficient level of immunity",
              country: "America",
              disc:
                "Chat with us in Facebook Messenger.\nFind out what's happening in the world as it unfolds.",
              type: null,
              id: 36,
            },
            {
              time: "2020-6-29",
              title: "Covid-19 is a crisis we can conquer",
              country: "America",
              disc:
                'Nile Francis is a recent graduate of South Cobb High School in Austell, Georgia.\nA senior in high school, I was looking forward to celebrating all the milestones graduates do -- prom, senior week celebrations, and graduation itself.\nAirreona Godfrey is a recent graduate of Frank Cody High School in Detroit, Michigan.\nSo, when the Covid-19 pandemic began, I didn\'t panic.\nIn the absence of experiencing my high school milestones in my person, my "village" is an important reminder that I can get through even the toughest of times.',
              type: "2",
              id: 37,
            },
            {
              time: "2020-6-27",
              title: "The Indian state that got its Covid-19 response right",
              country: "America",
              disc:
                "Every year, we would spend our summer vacation in Kerala, a state along the southern coast of India.\nWhile it is known for beautiful backwaters and ayurvedic centers, today Kerala is making headlines due to its success containing Covid-19.\nIt also has the highest literacy rate (over 92%) of any Indian state and, as of 2016, the highest life expectancy rate of about 75 years of age.\nThough 17 people died, Kerala quickly contained the virus and prevented its spread through the state.\nWhile it remains to be seen whether Kerala can contain the virus, Shailaja said she had planned for a second wave once travel restrictions were lifted.",
              type: "6",
              id: 38,
            },
            {
              time: "2020-6-28",
              title: "Donald Trump's strange way of thinking",
              country: "America",
              disc:
                '(CNN) "There is nothing either good or bad," Hamlet tells his old childhood buddies in Shakespeare\'s play, "but thinking makes it so."\n"We\'re doing so well after the plague," he told thousands of students at a rally in Arizona, where Covid-19 cases are spiraling up.\nIn reality, the number of new Covid-19 cases was increasing over the prior week\'s levels in more than 30 states by Friday.\nDean Obeidallah observed: "Donald Trump loves packed campaign rallies, positive media coverage and not being the butt of jokes.\nGood news or bad, Trump\'s recent performance was roasted in a leading conservative venue, the opinion pages of the Wall Street Journal.',
              type: "1",
              id: 39,
            },
            {
              time: "2020-05-24",
              title: "Trump isn't masking his denial",
              country: "America",
              disc:
                'During a round table event with restaurant leaders and executives, President Donald Trump spilled it to reporters: "I\'m taking it, hydroxychloroquine.\nDavid Perry cautioned, "Too many encounters around masking turn hostile,"cautioned, urging a strategy simpler than making it a political or a policing issue.\nA Trump firing leaves a trail of falloutFrida Ghitis, headed up by Secretary of State Mike Pompeo.\n"The numbers and rates of infection and death, including on the state\'s Department of Health Covid-19 website continue to be all over the place."\n"The numbers and rates of infection and death, including on the state\'s Department of Health Covid-19 website continue to be all over the place."',
              type: "5",
              id: 40,
            },
            {
              time: "2020-05-17",
              title: "The pre-shutdown Donald Trump is back",
              country: "America",
              disc:
                '(CNN) On February 28, President Donald Trump told rallygoers at the North Charleston Coliseum in South Carolina that "the Democrats are politicizing the coronavirus."\nIn mid-March, with the virus spreading fast, Trump reversed course and backed an extraordinary shutdown of ordinary life to protect health.\nAfter two staff members came down with Covid-19, the White House made mask-wearing mandatory but that appears not to apply to President Trump and Vice President Mike Pence. "\n"Is Kushner ignorant of the law, or did he let us know about the swirl of ideas being batted around in a nervous White House ?"\nNow President Trump is proclaiming "Obamagate," a hazy attack on his predecessor in the White House.',
              type: "6",
              id: 41,
            },
            {
              time: "2020-04-12",
              title: "Don't lose hope now",
              country: "America",
              disc:
                'Still, while the mourning proceeds, many are looking for signs of hope.\nIn contrast, they wrote, President Donald Trump "and his team have struggled to exercise effective, consistent leadership against an invisible enemy.\nIn contrast, they wrote, President Donald Trump "and his team have struggled to exercise effective, consistent leadership against an invisible enemy.\nTrump and the inspectorsOn Tuesday, President Trump demoted an acting inspector general who had been picked to monitor the implementation of the $2 trillion coronavirus relief package.\n"In short, African Americans are also more likely to be frontline workers, wrote.',
              type: "6",
              id: 42,
            },
            {
              time: "2020-05-10",
              title: "Trump ducks the real enemy",
              country: "America",
              disc:
                'And yet, this week the Trump White House appeared to be doing everything it could to change the subject.\nThe last thing he seemed to want to talk about was the real enemy.\nBut the United States needs real leadership now, and others around the world are also looking to us," Clark wrote. "\nPeter Bergen wrote, " wrote, " There are swarms of unanswered questions about how to deal with the coronavirus, which won\'t be wished away by wrapping up the task force."\n(Watch Fareed Zakaria\'s special on "The Post Covid-19 World" today on CNN.)',
              type: "3",
              id: 43,
            },
            {
              time: "2020-03-15",
              title: "This changes everything",
              country: "America",
              disc:
                'And on Friday, President Donald Trump declared a national emergency.\nIt\'s also a struggle for humans, who naturally depend on dozens of everyday social interactions.\nFormer Vice President Joe Biden has captured the votes of older Democrats; Vermont Senator Bernie Sanders the votes of younger Democrats."\nHilary Mantel\'s "Wolf Hall" trilogy is now complete, with the publication of her final historical novel on the life of Thomas Cromwell.\nCromwell, in the book and in real life, ascends to the highest reaches of power in England before his inevitable fall.',
              type: "5",
              id: 44,
            },
            {
              time: "2020-05-03 ",
              title: "Donald Trump turns the switch",
              country: "America",
              disc:
                'Despite the warnings of health experts, President Donald Trump was no longer trying to hedge his bets.\nA report in the Washington Post cited unnamed current and former officials who said President Trump received more than a dozen warnings about the coronavirus in January and February at a time when he publicly downplayed the threat to the US.\nTrump has made clear his disdain for parts of the nation\'s intelligence community, wrote.\n"The Yale findings indicate officials are vastly underestimating the toll of the pandemic ," wrote, whose work as a reporter for CNN helped pinpoint the likely death toll after Hurricane Maria hit Puerto Rico.\nRepublicans are worried about poll numbers that show Trump considerably behind Biden and that suggest their control of the Senate is at risk.',
              type: "6",
              id: 45,
            },
            {
              time: "2020-04-26 ",
              title: "Dangerous collisions in Trumpland",
              country: "America",
              disc:
                'And Trump suggested patients could be treated by the internal use of UV light and disinfectants, an idea that doctors immediately dismissed as ridiculous and dangerous.\nGarry Kasparov, "Trump -- facing an unprecedented crisis in the form of a deadly pandemic -- has shown himself to be a dangerous pathogen.\nWhen Fauci and Deborah Birx recommended that he implement population mitigation measures, he did so -- shutting down a booming US economy to protect public health."\nWhen Fauci and Deborah Birx recommended that he implement population mitigation measures, he did so -- shutting down a booming US economy to protect public health."\nChris Patten wrote that despite their failures, Trump\'s bashing of China and the World Health Organization is unproductive right now.',
              type: "6",
              id: 46,
            },
            {
              time: "2020-6-29",
              title: "Can this airplane seat keep you safe from Covid-19?",
              country: "America",
              disc:
                "(CNN) — As conversations continue about if, when and how it's safe to be flying , airplane seat designers continue to sketch out concepts for what the future of aviation might look like.\nLike other recent pandemic-inspired airplane seat designs, Interspace Lite involves adding kit to the airplane middle seat.\nComing soonUniversal Movement has partnered with airplane seat manufacturer Safran to get the concept off the ground.\nRelated content New airplane seat design will make it easier to sleep in economyFuture of the middle seat?\nRelated content This airplane seat design helps you socially distance on boardBut Munier reckons Interspace Lite is viable, and suggests carriers agree.",
              type: "5",
              id: 47,
            },
            {
              time: "2020-6-30",
              title:
                "Shell warns of $22 billion hit from coronavirus price slump",
              country: "America",
              disc:
                "London (CNN Business) Royal Dutch Shell is writing down the value of its assets by as much as $22 billion as lower oil prices push the Anglo-Dutch company to accelerate a shift away from fossil fuels.\nShell RDSA slashed its outlook for energy prices Tuesday, saying in a statement that it expects Brent crude to cost $40 per barrel in 2021 and $50 per barrel in 2022.\nBrent crude futures hit their lowest level in decades in April, falling below $20 per barrel.\nThey've staged a comeback to trade above $41 per barrel, but that's still well below where prices started the year.\nShell said Tuesday that it expects to take a charge of between $15 billion and $22 billion in the second quarter as a result of the shifting market conditions.",
              type: "5",
              id: 48,
            },
            {
              time: "2020-6-30",
              title: "More than 100 Covid-19 cases linked to Michigan bar",
              country: "America",
              disc:
                "(CNN) At least 107 coronavirus cases have been linked to a bar in East Lansing, Michigan, health officials tell CNN.\nOf the more than 100 positive cases, 12 are from secondary transmission, Ingham County Health Officer Linda S. Vail said Monday night.\nThe number of positive cases linked to the bar has risen rapidly since it was first reported Tuesday.\nInitially, 14 positive cases were reported, that jumped to 34 on Wednesday.\nThe bar followed safety guidelines for employees, capacity guidelines and table spacing, Harper's Restaurant & Brew Pub said in a June 22 statement on FacebookRead More",
              type: "3",
              id: 49,
            },
            {
              time: "2020-6-30",
              title:
                "5 things to know for June 30: Coronavirus, SCOTUS, White House, China, social media",
              country: "America",
              disc:
                "JUST WATCHED Activists react to SCOTUS decision Replay More Videos ... MUST WATCH Activists react to SCOTUS decision 03:133.\nChinaBeijing has reportedly passed that wide-reaching national security law for Hong Kong that critics say could erode the autonomous city's civil and political freedoms.\nThe US has also announced it will end exports of US-origin defense equipment to Hong Kong , citing the need to protect American security.\nSecretary of State Mike Pompeo specifically mentioned the new Hong Kong law in announcing the decision.\nJUST WATCHED Report: China passes Hong Kong national security law Replay More Videos ... MUST WATCH Report: China passes Hong Kong national security law 03:125.",
              type: "4",
              id: 50,
            },
            {
              time: "2020-6-29",
              title:
                "Gov. Ron DeSantis says young people and more social gatherings are causing COVID-19 spike across Florida",
              country: "America",
              disc:
                "Close Get email notifications on {{subject}} daily!\nYour notification has been saved.\nThere was a problem saving your notification.\n{{description}}Email notifications are only sent once a day, and only if there are new matching items.",
              type: "2",
              id: 51,
            },
            {
              time: "2020-6-29",
              title: "Pennsylvania Holding ‘Fish For Free’ Day On 4th Of July",
              country: "America",
              disc:
                "Quarantine Cooking: Your Essential Nonstick Cookware GuideStep up your quarantine cooking with this guide to nonstick cookware.\nHow To: 6 Easy Steps To Make Homemade Soft PretzelsLearn how to make your own homemade soft pretzels with these six easy steps!\n5 Vodka Sauce Recipes To Try This WeekAnd would you miss it if it wasn't there?\nTry These Make-Ahead Freezer Meals Perfect For WeeknightsSet yourself up for easy weeknight dinners no matter what!\nQuarantine Recipes: How To Make Homemade BagelsSee how to make your own homemade bagels while stuck inside during quarantine.",
              type: "2",
              id: 52,
            },
            {
              time: "2020-06-29 ",
              title:
                "Donations being accepted for baby in NICU after mother dies from COVID-19 complications",
              country: "America",
              disc:
                "BATON ROUGE, La.\n— A baby is being treated in the NICU following the death of her mother due to coronavirus complications, WAFB reports.\nAline “Allie” Guidry died on Thursday, and doctors were able to save Madaline, her baby girl who is preterm, according to a GoFundMe set up in support.\nThe fund says any money donated will pay for costs associated with Madaline’s stay in the NICU and medical bills accrued for Guidry’s treatment.\nThe money will also help cover Guidry’s funeral expenses, the fund says.",
              type: "6",
              id: 53,
            },
            {
              time: "2020-6-29",
              title:
                "Contra Costa County Pauses Reopenings As COVID-19 Infections, Hospitalizations Spike",
              country: "America",
              disc:
                "MARTINEZ (CBS SF) — Contra Costa County announced Monday it would delay any more reopening of businesses and activities planned for July 1 as COVID-19 outbreaks soar in the county.\nThe decision comes a day after Governor Gavin Newsom ordered a number of counties to close down bars and recommended to other counties, including Contra Costa and Santa Clara, to not reopen bars.\nThe percentage of COVID-19 tests that came back positive has also increased from 4% to 6%, according to the county.\nCounty health services also said there has been a shift toward more young people testing positive.\nIn June, 55 percent of people testing positive in Contra Costa were 40 years and younger, compared to 38 percent for that group in April.",
              type: "1",
              id: 54,
            },
            {
              time: "2020-6-29",
              title:
                "Nets' Spencer Dinwiddie Tested Positive for COVID-19; NBA Restart Status Unclear",
              country: "America",
              disc:
                "Chris Elise/Getty ImagesBrooklyn Nets point guard Spencer Dinwiddie has tested positive for COVID-19, and his status for the NBA's planned restart in Lake Buena Vista, Florida is unclear at this time.\nI was ready and prepared to rejoin my teammates as we were to be an early entry team in the resumed season.\nDinwiddie has been an instrumental part of the Nets' success this season, especially with Irving missing 44 games because of injury.\nWithout Dinwiddie, the Nets would presumably look toward Chris Chiozza to help fill the gap at point guard.\nDinwiddie is the fifth Net to test positive for COVID-19 per reports.",
              type: "6",
              id: 55,
            },
            {
              time: "2020-6-30",
              title:
                "Fauci and Redfield to testify before Senate as states struggle to contain coronavirus",
              country: "America",
              disc:
                "Washington (CNN) Coronavirus task force member Dr. Anthony Fauci, Centers for Disease Control and Prevention Director Robert Redfield and other top government health officials will testify before a Senate Committee on Tuesday on the latest efforts by the US government to contain the pandemic.\nThe Health, Education, Labor, and Pensions panel hearing comes as several states are struggling to contain the virus as cases counts continue to rise across the nation and states begin to reopen.\nMore than half of all states are seeing a rise in cases, and Florida, Texas and Arizona are getting hit particularly hard.\nSenators have been weighing another stimulus package in recent weeks as unemployment numbers remain worrisome and economic hardship stemming from the pandemic persists.\nBut there is now broad agreement something has to be done -- something that wasn't always the case.",
              type: "2",
              id: 56,
            },
            {
              time: "2020-06-30 ",
              title:
                "El nivel de pruebas de covid-19 en países de América por cada 1.000 habitantes",
              country: "America",
              disc:
                "El nivel de las pruebas de covid-19 en los países de América ha variado.\nEn esta gráfica, te contamos cuál es el nivel de pruebas por cada 1.000 habitantes hasta este lunes, según la publicación en línea Our World in Data.\nLEE: Coronavirus 29 de junio, minuto a minuto: OMS dice que la pandemia “no está ni cerca de terminar”",
              type: null,
              id: 57,
            },
            {
              time: "2020-06-30 ",
              title: "Coronavirus: la peor semana en Estados Unidos",
              country: "America",
              disc:
                "La última semana se ha convertido en la peor de Estados Unidos desde que comenzó la pandemia en el país, a mediados de marzo.\nEn la semana del 22 al 28 de junio se sobrepasó por primera vez los 40.000 infectados en un solo día.\nLEE: El papel de los jóvenes en los brotes de coronavirus en EE.UU.\n: podrían causar “un infierno” si no toman precauciones, dice experto",
              type: null,
              id: 58,
            },
          ],
        };
        this.setState({
          count: response.count,
          events: response.events,
          loading: false
        });
      });
  }

  handleClick(id) {
    this.setState({ id, visible: true });
  }

  countrySelected = (result, msg) => {
    console.log(msg);
    if (msg === "United States of America") {
      msg = "America";
    } else if (msg === "United Kingdom") {
      msg = "Britain";
    }
    this.setState({
      selectCountry: msg,
    });
  };

  render() {
    let timeList = (count) => {
      if (this.state.loading) {
        return <p />;
      } else {
        let res = [];
        if (this.state.selectCountry === "") {
          for (let i = 0; i < count; i++) {
            res.push(
                <Timeline.Item
                    label={this.state.events[i].time}
                    color={typeColorDict[this.state.events[i].type - 1]}
                    onClick={() => this.handleClick(this.state.events[i].id)}
                >
                  {this.state.events[i].title}
                </Timeline.Item>
            );
          }
        } else {
          for (let i = 0; i < count; i++) {
            if (
                this.state.events[i].country.toLowerCase() ===
                this.state.selectCountry.toLowerCase()
            ) {
              res.push(
                  <Timeline.Item
                      label={this.state.events[i].time}
                      color={typeColorDict[this.state.events[i].type - 1]}
                      onClick={() => this.handleClick(this.state.events[i].id)}
                  >
                    {this.state.events[i].title}
                  </Timeline.Item>
              );
            }
          }
        }
        if (res.length) return res;
        else
          return (
              <p align="center">
                There is no news related to COVID-19 in this country!
              </p>
          );
      }
    };

    return (
      <div className="events-list">
        <Spin tip="Loading..." spinning={this.state.loading}>
          <Timeline mode="left">{timeList(this.state.count)}</Timeline>
          <EventModal id={this.state.id} visible={this.state.visible} />
          <GlobeDiv parent={this} />
        </Spin>
      </div>
    );
  }
}

export default EventLine;
