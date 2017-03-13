$(function() {
    var assignments = {
        '2016-06-23T05:59:59Z': { name: 'Skill Exercise #1',                        href: '/dc/assignment/skills.html#exercise-1'     },
        '2016-06-24T05:59:59Z': { name: 'Group Session #1 Responses',               href: '/dc/assignment/index.html#sessions'        },
        '2016-06-25T05:59:59Z': { name: 'Skill Exercise #2',                        href: '/dc/assignment/skills.html#exercise-2'     },
        '2016-06-28T05:59:59Z': { name: 'Skill Exercise #3',                        href: '/dc/assignment/skills.html#exercise-3'     },
        '2016-06-30T05:59:59Z': { name: 'Skill Exercise #4',                        href: '/dc/assignment/skills.html#exercise-4'     },
        '2016-07-02T05:59:59Z': { name: 'Group Session #2 Responses',               href: '/dc/assignment/index.html#sessions'        },
        '2016-07-08T05:59:59Z': { name: 'Group Session #3 Responses',               href: '/dc/assignment/index.html#sessions'        },
        '2016-07-09T05:59:59Z': { name: 'Interpretation #1 (D&amp;C 43)',           href: '/dc/assignment/index.html#interpretations' },
        '2016-07-14T05:59:59Z': { name: 'Interpretation #2 (D&amp;C 46)',           href: '/dc/assignment/index.html#interpretations' },
        '2016-07-16T05:59:59Z': { name: 'Commentary for Group Sessions #1&ndash;3', href: '/dc/assignment/index.html#sessions'        },
        '2016-07-18T22:59:59Z': { name: 'Midterm Exam',                             href: '/dc/assignment/index.html#midterm'         },
        '2016-07-20T05:59:59Z': { name: 'Interpretation #3 (D&amp;C 61)',           href: '/dc/assignment/index.html#interpretations' },
        '2016-07-22T05:59:59Z': { name: 'Group Session #4 Responses',               href: '/dc/assignment/index.html#sessions'        },
        '2016-07-27T05:59:59Z': { name: 'Interpretation #4 (D&amp;C 1)',            href: '/dc/assignment/index.html#interpretations' },
        '2016-07-30T05:59:59Z': { name: 'Group Session #5 Responses',               href: '/dc/assignment/index.html#sessions'        },
        '2016-08-03T05:59:59Z': { name: 'Group Session #6 Responses',               href: '/dc/assignment/index.html#sessions'        },
        '2016-08-06T05:59:59Z': { name: 'Commentary for Group Sessions #4&ndash;6', href: '/dc/assignment/index.html#sessions'        },
        '2016-08-09T05:59:59Z': { name: 'Reading Project',                          href: '/dc/assignment/index.html#project'         },
        '2016-08-12T05:59:59Z': { name: 'Final Exam',                               href: '/dc/assignment/index.html#final'           }
    };
    
    var sessions = {
        '2016-06-20T23:00:00Z': 'Our next session will introduce the D&amp;C and run through the syllabus. You will need to follow along with the syllabus either by pulling up this website on a device or laptop, or by sharing a screen with a classmate.</p><p>During the second half of class, we will learn about Joseph Smith and how he began his revelatory career. Pay attention for details about his modes of revealing, his concept of the prophetic gift, and how these nuances differ from generic descriptions of the translation process used in the production of the Book of Mormon.</p><p>Our session will wrap with an exploration into the principal voice of the D&amp;C revelations, &ldquo;the Lord&rdquo; as he is most often termed in the revelations themselves.',
        '2016-06-22T23:00:00Z': 'How did we get the Doctrine and Covenants? And how did it come to be regarded as scripture? Our next session will explore these questions and set up the important contextual background for all we will be reading throughout the course.</p><p>Come prepared to track the origins and development of the D&amp;C as a compilation of Joseph Smith&rsquo;s revelations to a work of LDS scripture.</p><p>We will also introduce two essential interpretive methods: exegesis and eisegesis. You will learn how to apply these methods to more abundantly understand the meanings of scripture.',
        '2016-06-27T23:00:00Z': 'Our next session will take up Joseph Smith&rsquo;s very first recorded revelation, D&amp;C 3 and examine the beginnings of his prophetic and revelatory career. Come to class having read D&amp;C 3&ndash;5, 6, 10, 8, 7, and 9 (be sure to follow this sequence!) and be prepared to write about key passages from these revelations.',
        '2016-06-29T23:00:00Z': 'Our next session will work through revelations received during the later stages of the Book of Mormon translation. Be sure to give special attention to D&amp;C 18 and consider how this revelation grounds the Lord&rsquo;s explanation of his atonement. Come ready to answer this question: What reason(s) did the Lord give for why he called people to cry repentance?',
        '2016-07-06T23:00:00Z': 'Our next session will examine revelations connected with the founding of the Church of Christ in New York and the first missionary calls. Come to class having read D&amp;C 21, 20, 23, 22, 24, 26, 25, 27, 29, and 28 (keep to this sequence!). Pay special attention to the Lord&rsquo;s direction to Oliver Cowdery and how Joseph Smith&rsquo;s role as First Elder in the church began to separate from his earlier translator responsibilities. Be ready to write and comment on these developments.',
        '2016-07-11T23:00:00Z': 'Our next session will follow the revelations directing Joseph Smith and the New York Saints to relocate to Kirtland, Ohio. You will need to have read D&amp;C 30&ndash;36, the Prophecy of Enoch, and D&amp;C 37, 74, 38&ndash;40. We will dig deep into these texts to make sense of a radical and profound idea that would totally transform the early Latter-day Saint project: Zion. Be ready to answer this question: how did the rather generic Protestant phrase &ldquo;cause of Zion&rdquo; turn into an elaborate Mormon concept replete with city plans, temple designs, migration traffic, and new doctrines?',
        '2016-07-13T23:00:00Z': 'Our next session will explore three events and subsequent revelations surrounding Joseph Smith&rsquo;s arrival in Ohio: the revelation of the Lord&rsquo;s promised &ldquo;Law&rdquo;, a regular member presenting revelations to the church, and Joseph Smith resuming his Bible revision project. Read D&amp;C 41&ndash;45 carefully, and come to class ready to explain the Law of Consecration as laid out in D&amp;C 42 and the Lord&rsquo;s commandment for the Saints regarding whether and how to receive statements from leaders and others as revelations and commandments.',
        '2016-07-18T23:00:00Z': 'Our next session will consider the circumstances leading to interactions between the Ohio Saints and other religious groups, which, in turn, gave impetus for new revelations about the Holy Spirit and how to recognize its influence in missionary gatherings. Come to class having read D&amp;C 46&ndash;56 and prepared to write in response to the question, What did the Lord have to say to missionaries concerned about how to recognize the gifts of the Holy Spirit?',
        '2016-07-20T23:00:00Z': 'Our next session will examine revelations emerging from new difficulties of managing the effort in Missouri to build the New Jerusalem. Read D&amp;C 57&ndash;64, 66, 65, and 68 paying attention to the problems and challenges facing church leaders, particularly the modes of travel available to converts making for Zion and the dangers of taking riverways. Be prepared to write about the feet-dusting ritual explained in these revelations and whether stories about missionaries cursing people with it are supported by the D&amp;C.',
        '2016-07-27T23:00:00Z': 'Our next session will discuss the Lord&rsquo;s commandment to church leaders to compile and publish the revelations in book form and the procedure they were to follow in bringing the revelations to the world. We will also notice the emergence of another radical concept: the Holy Priesthood. Read D&amp;C 1, 67, 133, 69, 107-A (handout), and 70&ndash;72 giving particular attention to what the Lord intended for the D&amp;C compilation, why he called on Joseph Smith and gave him revelations, why the urgency for Joseph Smith to produce and publish revelations, and how the idea of the Holy Priesthood differed from descriptions of ecclesiastical authority mentioned in earlier revelations. Be prepared to make comparisons across multiple sections of the D&amp;C.',
        '2016-08-01T23:00:00Z': 'Our next session will note the importance of the conference held at Amherst in 1832 and how it set in motion changes in the whole complexion of the church. We will also begin an extended review of one of Joseph Smith&rsquo;s most pivotal visions, what he called simply &ldquo;<em>The</em> Vision.&rdquo; Come to class having read carefully D&amp;C 73, 75, and the first half or so of 76. Bring at least two questions about these texts to discuss in class.',
        '2016-08-03T23:00:00Z': 'Our next session will resume our review of D&amp;C 76 and will discuss the ways this vision amplified the Lord&rsquo;s explanation of his atonement. Look carefully at the passages in The Vision related to Jesus and his role in the grand scheme of the Resurrection. Pay attention to your assumptions about kingdoms of glory and come ready to discuss how D&amp;C 76 alters your thoughts about the afterlife. (Remember, this is a vision of the <em>Resurrection</em>, not the eternal destinations of post-Resurrection beings.)',
        '2016-08-08T23:00:00Z': 'Our final session will take a broad view of the whole D&amp;C. We will discuss contributions made by revelations in the second half of the D&amp;C and how this book of scripture introduces concepts and doctrines not found anywhere else. Be ready to connect your Reading Project to the themes we will cover.'
    };
    
    $.each(assignments, function(stamp, assign) {
        var deadline = Date.create(stamp);
        if (deadline.isAfter('now')) {
            $('#deadline').html(deadline.format('{Weekday}, {Month} {d}, {h}:{mm} {TT}'));
            $('#name').html(assign.name);
            $('#assignment').prop('href', assign.href);
            return false;
        }
    });
    
    $.each(sessions, function(stamp, session) {
        var meeting = Date.create(stamp);
        if (meeting.isAfter('now')) {
            $('#session_date').html(meeting.format('{Month} {d}, {h}:{mm} {TT}'));
            $('#session_info').html(session);
            return false;
        }
    });
});