// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><li class="part-title">Commentary</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="justice/upholding-justice.html"><strong aria-hidden="true">1.</strong> Upholding the Justice</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="opinion/great_indian_bustard.html"><strong aria-hidden="true">2.</strong> Is protecting climate recognized as a fundamental right, or is it merely serving corporate profit?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="health/loudspeaker.html"><strong aria-hidden="true">3.</strong> The Silent Crisis: Noise Pollution, Health Impact, and Fascism&#39;s Exploitation of Religious Noise Pollution</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="opinion/holi_and_prahlada.html"><strong aria-hidden="true">4.</strong> The story of Prahlada and Holika teaches us that good will always triumph over evil</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="health/meat_politics.html"><strong aria-hidden="true">5.</strong> Meat politics in India</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="opinion/gullibility_test.html"><strong aria-hidden="true">6.</strong> Gullibility Test</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="opinion/odisha_future.html"><strong aria-hidden="true">7.</strong> Odisha&#39;s future for the next five years looks gloomy with the change in government</a></span></li><li class="chapter-item expanded "><li class="part-title">Sarcasm</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="satire/dictatorship.html"><strong aria-hidden="true">8.</strong> Dictatorship</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="satire/electoral_bond.html"><strong aria-hidden="true">9.</strong> Electoral Bond</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="satire/news.html"><strong aria-hidden="true">10.</strong> Devaluing Currency</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="satire/elon_on_freedom_of_speech.html"><strong aria-hidden="true">11.</strong> Elon on Freedom of Speech</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="satire/modi_balloon.html"><strong aria-hidden="true">12.</strong> Modi Balloon</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="satire/indian-election.html"><strong aria-hidden="true">13.</strong> Indian Elections John Oliver</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="justice/blindfold.html"><strong aria-hidden="true">14.</strong> Blindfold</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="satire/india-2030.html"><strong aria-hidden="true">15.</strong> Welcome to India 2030</a></span></li><li class="chapter-item expanded "><li class="part-title">Presentation</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="presentation/no-govt.html"><strong aria-hidden="true">16.</strong> What Happens When There Is No Government?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="presentation/approval-voting/approval-voting.html"><strong aria-hidden="true">17.</strong> Advantages of Approval Voting</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="presentation/two-step-democracy-restore/democracy_restore.html"><strong aria-hidden="true">18.</strong> Two-Step Democracy Restore</a></span></li><li class="chapter-item expanded "><li class="part-title">Factcheck</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="factcheck/pm_modi_speech.html"><strong aria-hidden="true">19.</strong> PM&#39;s Rajasthan Speech on Population Jihad</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="factcheck/palki_speech.html"><strong aria-hidden="true">20.</strong> Palki Sharma Fact Check</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="factcheck/tavleen_sign_factcheck.html"><strong aria-hidden="true">21.</strong> Robin Hood Economics Fact Check</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="information/gopinathan-speech.html"><strong aria-hidden="true">22.</strong> The Danger of Oversimplified Questions in Politics</a></span></li><li class="chapter-item expanded "><li class="part-title">Observation</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/print-media-vs-mainstream-tv-media.html"><strong aria-hidden="true">23.</strong> Print Media vs Mainstream TV Media</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/money_and_winning_election.html"><strong aria-hidden="true">24.</strong> Money is Not the Key to Winning an Election</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/justice-katju-on-economics-politics-media.html"><strong aria-hidden="true">25.</strong> Justice Katju on Indian economics, politics and media</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/dont-enter-politics.html"><strong aria-hidden="true">26.</strong> Why Don&#39;t Educated Indians Enter Politics?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/bread_and_circuses_indian_youth.html"><strong aria-hidden="true">27.</strong> Bread and Circuses: The Distracted Youth of India</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/nurture_vs_nature.html"><strong aria-hidden="true">28.</strong> Nurture vs. Nature: The Complex Interaction of Genes and Environment</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/criminals-are-not-born.html"><strong aria-hidden="true">29.</strong> Criminals are not born out but made</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/educated_politicians.html"><strong aria-hidden="true">30.</strong> The Necessity of Education for Politicians: Ensuring Competent Governance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/statistics-cheating.html"><strong aria-hidden="true">31.</strong> Statistics Behind Cheating in Exam</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/citing_sources.html"><strong aria-hidden="true">32.</strong> Citing sources to criticize not copyright</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/justice-for-moumita-debnath.html"><strong aria-hidden="true">33.</strong> Justice for Moumita Debnath</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="justice/capital-punishment.html"><strong aria-hidden="true">34.</strong> Capital Punishment: An Ineffective Solution to a Complex Issue</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/self-interest.html"><strong aria-hidden="true">35.</strong> Do we work with self-interest?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="justice/internet-shutdown.html"><strong aria-hidden="true">36.</strong> Internet Shutdown is Anti-Constitutional</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="justice/freeze-of-account.html"><strong aria-hidden="true">37.</strong> Freezing of account</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="justice/police-loyality.html"><strong aria-hidden="true">38.</strong> Police Loyalty to the People and the Constitution, Not to Political Powers or Corporations</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="opinion/street-vendors.html"><strong aria-hidden="true">39.</strong> No Place for Street Vendors in India: The Erosion of Local Markets and the Rise of Rent-Seeking Hubs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/kumbh/kumbh-mela-or-superstition.html"><strong aria-hidden="true">40.</strong> Mahakumbh Mela: A Product of Rampant Superstition Plaguing India</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/institutions/intitutional-corruption.html"><strong aria-hidden="true">41.</strong> Corrupt Institutions of India</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="secularism/godman-babas.html"><strong aria-hidden="true">42.</strong> From Godmen to Godfathers: How Babas Are Shaping Hindutva Politics and India’s Future</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/starlink/starlink-is-dead.html"><strong aria-hidden="true">43.</strong> Without Government Subsidies, Starlink Is Dead: Can It Compete with 5G&#39;s Dominance?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/surveillance/crypto-not-tax-evasion.html"><strong aria-hidden="true">44.</strong> Crypto is Not About Tax Evasion; It&#39;s About Collecting Decentralized Tax Efficiently</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/remote-work/remote-work.html"><strong aria-hidden="true">45.</strong> Stop Replacing Forests with IT Parks: The Future of Work is Remote</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/idea_of_india/idea_of_india.html"><strong aria-hidden="true">46.</strong> Idea of India</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/civil-disobedience/riots.html"><strong aria-hidden="true">47.</strong> Riots Aren’t the Solution to Government Dictatorship—It’s Always Civil Disobedience</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="evolution/hindutva_brigade_wants_you_to_believe_in_eugenics.html"><strong aria-hidden="true">48.</strong> The Hindutva Brigade Wants you to Believe in Eugenics not Evolution</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="islam/islam-and-terrorism.html"><strong aria-hidden="true">49.</strong> On Critiquing Ideologies: Islam, Extremism &amp; Women’s Rights — Beyond Hindutva Propaganda</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="terrorism/war_and_terrorism.html"><strong aria-hidden="true">50.</strong> Does War Stop Terrorism? A Deeper Look into the Roots and Solutions</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="criticism/criticism-becomes-crime.html"><strong aria-hidden="true">51.</strong> When Criticism Becomes a Crime: India&#39;s Slide Toward Authoritarianism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="election/china-vs-india.html"><strong aria-hidden="true">52.</strong> India vs China: Why the Comparison Is Fundamentally Flawed</a></span></li><li class="chapter-item expanded "><li class="part-title">Election</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="election/haryana-election.html"><strong aria-hidden="true">53.</strong> Haryana Election</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="election/maharastra-election.html"><strong aria-hidden="true">54.</strong> Maharashtra Election</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/rahul-gandhi-on-evm.html"><strong aria-hidden="true">55.</strong> Why is Leader of Oppostion Rahul Gandhi Silent on EVM issues?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="justice/supreme-court-corruption.html"><strong aria-hidden="true">56.</strong> The Supreme Court of India: Supreme Corruption Institution?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="election/awareness-problem-evm.html"><strong aria-hidden="true">57.</strong> Breaking the Trust on EVMs: Addressing the Awareness Problem Through Deep Canvassing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/state_terrorism.html"><strong aria-hidden="true">58.</strong> State terrorism for those who distrust EVM</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="opinion/democractic_crossroads.html"><strong aria-hidden="true">59.</strong> India&#39;s Democratic Crossroads: A Future in Peril?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="election/delhi-election-2025.html"><strong aria-hidden="true">60.</strong> FPTP is Anti-Democratic: It&#39;s Time for Political Parties to Show Their Patriotism</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="election/eci-transparency.html"><strong aria-hidden="true">61.</strong> Why Does the Election Commission of India Fear Transparency?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="election/data-not-analysed-for-years.html"><strong aria-hidden="true">62.</strong> Why Has Election Commission Data Not Been Analyzed for Years? Why Are Universities Failing Us?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="election/oppostion-unity.html"><strong aria-hidden="true">63.</strong> Authoritarian regimes seek a lack of unity among the opposition to hold on to power—and it is succeeding</a></span></li><li class="chapter-item expanded "><li class="part-title">Education</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="education/edupreneurs_do_more_harm_than_good.html"><strong aria-hidden="true">64.</strong> Why Many Edupreneurs and Stakeholders in Education Do More Harm Than Good</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="education/arbitrary_questioning.html"><strong aria-hidden="true">65.</strong> India’s Obsession with Marks and the Absurdity of Arbitrary Questioning</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="education/luck.html"><strong aria-hidden="true">66.</strong>  What Is Luck? Astrology or Science</a></span></li><li class="chapter-item expanded "><li class="part-title">Information</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="information/four_departments_brainwashing.html"><strong aria-hidden="true">67.</strong> Four departments of brainwashing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="information/master_of_the_roster.html"><strong aria-hidden="true">68.</strong> The Justice Brief, Master of Roster</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="information/broadcast_bill.html"><strong aria-hidden="true">69.</strong> Broadcast bill explained: Is censorship coming for content creators?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="information/dicator_sheikh_hasina.html"><strong aria-hidden="true">70.</strong> Last 48 Hours Of Dictator Sheikh Hasina | What Next For Bangladesh?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="information/DPDP_Act.html"><strong aria-hidden="true">71.</strong> Digital Personal Data Protection Act to dilute RTI</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="information/five-year-achievement.html"><strong aria-hidden="true">72.</strong> Collective Achievements Shaping a Freer Digital Future</a></span></li><li class="chapter-item expanded "><li class="part-title">Social Media</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="observation/move_to_decentralized_platform.html"><strong aria-hidden="true">73.</strong> Breaking Free from the Post-Truth World: Why Indian Media Should Migrate to Mastodon and Bluesky</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="opinion/enshittification.html"><strong aria-hidden="true">74.</strong> The Path to Enshittification: How Ad-Driven Models Poison Information and Society</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="opinion/user-controlled-feeds.html"><strong aria-hidden="true">75.</strong> User-Controlled FOSS Apps: The Lifeline for Democracy in the Digital Age</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="opinion/elon_musk_a_problem.html"><strong aria-hidden="true">76.</strong> Elon Musk: A Problem for Society?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="big-tech-media/big-tech-media.html"><strong aria-hidden="true">77.</strong> The Root Cause of Democracy at Risk: Big Tech Social Media</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="big-tech-media/quit-social-media.html"><strong aria-hidden="true">78.</strong> Dear Civil Societies, Journalists, and Fact-Checkers — It’s Time to Mobilize People to Leave Big Tech Social Media Behind</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="big-tech-media/the_great_indian_media_circus.html"><strong aria-hidden="true">79.</strong> The Great Indian Media Circus: Which Platforms Are Left for Political Discourse in India?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="big-tech-media/switching-costs.html"><strong aria-hidden="true">80.</strong> How to Decrease Switching Costs and Make People Move to Bluesky</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="big-tech-media/shitter.html"><strong aria-hidden="true">81.</strong> Twitter: Last Week Tonight with John Oliver</a></span></li><li class="chapter-item expanded "><li class="part-title">Decentralization</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="decentralization/supplychain-basic-income.html"><strong aria-hidden="true">82.</strong> To Eliminate Poverty, We Need to Decentralize Supply Chains and Introduce Supply Chain-Based Basic Income</a></span></li><li class="chapter-item expanded "><li class="part-title">Pollution</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pollution/car-ban.html"><strong aria-hidden="true">83.</strong> Banning Cars to Tackle Pollution: A Must, But Intentions Matter More</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pollution/stubble-burning.html"><strong aria-hidden="true">84.</strong> Stubble Burning is a Distraction to Pollution</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="pollution/factories-datatabase.html"><strong aria-hidden="true">85.</strong> Sketch for data collection for polluting factories</a></span></li><li class="chapter-item expanded "><li class="part-title">Others</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="bullshit_jobs/bullshit_jobs.html"><strong aria-hidden="true">86.</strong> What shorts of Bullshit Jobs are there?</a></span></li><li class="chapter-item expanded "><li class="part-title">Economics</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="economics/printing-money.html"><strong aria-hidden="true">87.</strong> Why do prices keep rising while incomes remain stagnant?</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="economics/right-to-livelihood.html"><strong aria-hidden="true">88.</strong> When Taxes Undermine Livelihood: A Critique of India’s Current Tax Policy</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="economics/dollar-appreciation.html"><strong aria-hidden="true">89.</strong> The Dollar’s Inflation Export Machine – And Why an INR Crypto Stablecoin Might Be India’s Lifeline</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="economics/pollution-and-employment.html"><strong aria-hidden="true">90.</strong> Pollution and Employment Need Not Be Mutually Exclusive</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="economics/digital_bank_currency.html"><strong aria-hidden="true">91.</strong> Understaning Central Bank Digital Currency</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="economics/ethanol/lca-for-ethanol.html"><strong aria-hidden="true">92.</strong> Life Cycle Assessment (LCA) of Maize-Based Ethanol Production in India</a></span></li><li class="chapter-item expanded "><li class="part-title">Health</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="health/ayushman-bharat/ayushman-bharat.html"><strong aria-hidden="true">93.</strong> Is Ayushman Bharat merely a gimmick?</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

