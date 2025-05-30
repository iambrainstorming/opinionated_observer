# FPTP is Anti-Democratic: It's Time for Political Parties to Show Their Patriotism

The Aam Aadmi Party (AAP) began from scratch, emerging out of a protest against corruption with a vision of practicing good politics. Their slogan, *"Kaam Ki Rajniti"* (Politics of Work), emphasizes politics for education, public transport, healthcare, and safeguarding the interests of common people through initiatives like free electricity and free bus transport for women. They claim to distance themselves from the divisive politics of religion, focusing instead on governance and public welfare.

### **FPTP: The Most Flawed Voting Method**
The Aam Aadmi Party won two consecutive elections and governed Delhi for 10 years. However, the 2025 Delhi election marked a significant shift. In this election, AAP secured 22 seats, while the BJP won 48 seats. This translated to AAP holding 31.428% of the seats and the BJP holding 68.571%, a staggering difference of 37.15%.

However, the [vote percentages tell a different story](https://github.com/silicology/election_data_analysis/blob/main/data/2025_assembly/analysis/percentage_votes_party_wise_delhi_2025.json). AAP received 43.56% of the votes, while the BJP garnered 45.56%—a mere 2% difference. Despite this narrow gap in votes, the seat distribution shows a drastic disparity of 37.15%. Meanwhile, Congress secured 6.34% of the votes without winning any seats, and Janta Dal (United) received 1.06% of the votes, also failing to secure any seats.

Combined, AAP, Congress, and Janta Dal (United) received the majority of the votes. Some argue that Congress's presence split the anti-BJP vote, leading to AAP's defeat. Arvind Kejriwal, AAP's leader, [has even accused Congress of contesting elections solely to defeat AAP](https://filestorage.4everland.store/congress-defeated-aap.mp4).

This phenomenon of vote splitting decimated AAP in the 2025 Delhi election. Such trends are not unique to Delhi; they are prevalent in almost all elections under the First-Past-the-Post (FPTP) system, where parties with a minority of votes often form the government.

In the 2025 Delhi election, [only 38 winning candidates secured a simple majority of votes, while 32 candidates won without achieving a simple majority](https://github.com/silicology/election_data_analysis/blob/main/data/2025_assembly/analysis/vote-splitting-delhi-2025.json). This highlights the flaws of the FPTP system, which is widely criticized for being anti-democratic and failing to ensure voter satisfaction. [Approval voting](https://electionscience.org/), on the other hand, eliminates vote splitting and increases voter satisfaction by allowing voters to express support for multiple candidates.

### **Plausible EVM Manipulation**
The drastic 37.15% disparity in seat percentages, despite the narrow 2% difference in vote shares, has raised suspicions of Electronic Voting Machine (EVM) manipulation. Additionally, discrepancies in FORM 17C data—which records votes polled—have further fueled these doubts. While AAP has uploaded FORM 17C data on its website, the [data on the Election Commission of India (ECI) website does not match](https://github.com/silicology/election_data_analysis/blob/main/data/2025_assembly/other_data/Aap-compilation-eci-website.png). Since FORM 17C data consists of scanned copies, automated counting is challenging. A manual analysis, which could take several days, is necessary to uncover the truth. [AAP and Arvind Kejriwal deserve credit for uploading FORM 17C](https://transparentelections.in/) data and promoting transparency, something the ECI has failed to do. Similarly, FORM 17C Part 2 and FORM 20 should also be made available for public scrutiny. Also, there is a rule to randomly count a few VVPATs. How many VVPATs have been counted? Have they matched the EVM data? This data form should also be disclosed.


## Bandwidth Resource Calculation:

The AAP initiative website [transparentelections.in](https://transparentelections.in/) has exceeded its bandwidth limit. Hosting such large files (about 40-50GB) for nationwide access requires significant financial resources. They could have uploaded the data as a torrent, allowing users to share bandwidth and distribute the load efficiently.

1Gb of bandwidth may cost around Rs 14. So, for 1,000 people downloading 40Gb each, the total cost would be:
40 * 14 * 1,000 = Rs 560,000.

For serving lakhs of people, the cost would be Rs 56,000,000. This is quite expensive.

Though I don't have any data on how many people are actually downloading it. Is it in the hundreds, the thousands, or even more downloads?

A better approach is to use torrent clients to distribute the files, reducing the bandwidth load on a single server. One can use [WebTorrent](https://webtorrent.io/) to create torrent files and [rqbit](https://github.com/ikatson/rqbit) to run servers. However, rqbit does not currently have a feature to create torrent files.


## WebTorrent Links Compilation

Everyone is encouraged to seed using WebTorrent by downloading from the transparentelections.in website. More seeds mean a faster download.

Just place the file in the torrent client's download folder. By adding the [torrent file](https://github.com/silicology/election_data_analysis/blob/main/data/2025_assembly/torrent-magnets/AC-4.torrent) to the client, it will start seeding. For example, if you are starting the server in the `Downloads` folder, place the `AC-4.zip` file in `Downloads` and run:

```sh
rqbit server start ~/Downloads
```

The same method applies to all BitTorrent clients.


[https://github.com/silicology/election_data_analysis/tree/main/data/2025_assembly/torrent-magnets](https://github.com/silicology/election_data_analysis/tree/main/data/2025_assembly/torrent-magnets)

## EVM Quiz

To better understand the concerns surrounding EVMs, take the quiz provided.

[EVM Quiz](https://interactive-five.vercel.app/evm)

[Who is evil, whether it's the people or the voting method?](https://iambrainstorming.github.io/chapters/the-lok-sabha-election-is-about-regional-parties-vs-one-party-dictatorship.html#who-is-evil-whether-its-the-people-or-the-voting-method)

## Automated counting of VVPAT

If parties find it too hard to bring paper ballots, they may request a 100% automated counting of VVPAT slips, with the slips handed to voters and placed in the ballot box. Automated counting through OCR is possible, and with parallel counting, it can be completed in a few hours.

Such a request is even more effective, as opponents will have no argument to make. The purpose of VVPAT is for counting and matching with the EVM results, right? So why aren't they counting it? Just make the paper slips compatible with OCR machines so they can be counted through them.

### **Patriotism: Actions Speak Louder Than Words**
AAP claims to be more patriotic than other parties, citing its nationwide anti-corruption protests as evidence. However, these protests, while impactful, failed to bring about concrete systemic changes. Proposals like strengthening bureaucratic structures such as the LokPal may not eliminate corruption but could instead lead to authoritarianism. Real change can only come through free and fair elections, which require the adoption of approval voting and the elimination of EVMs. Only when good candidates come to power can transparency and accountability be ensured, ultimately reducing corruption.

AAP has demonstrated its ability to protest and win elections in the past. They have the potential to lead the charge for approval voting and the banning of EVMs, but their inaction on these issues raises questions about their commitment to true patriotism. It is time for AAP to walk the talk and champion reforms that strengthen democracy.
