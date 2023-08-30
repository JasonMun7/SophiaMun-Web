// Icon images for Services
import soapIconL from '../assets/service/soapIconL.png'
import cereal from '../assets/service/cereal.png'
import winter from '../assets/service/winter.png'
import rainn from '../assets/service/rainn.png'
import senior from '../assets/service/senior.png'
import violin from '../assets/service/violin.png'
import heart from '../assets/service/heart.png'

// Images for Services
import garage from '../assets/service/serviceImgs/garage.jpg'

// Images for Leadership
import sbo from '../assets/leadership/sbo.jpg'
import userve from '../assets/leadership/userve.jpg'
import symphony from '../assets/leadership/symphony.jpg'
import allState from '../assets/leadership/allState.jpg'
import honorsOrch from '../assets/leadership/honorsOrch.jpg'
import justServe from '../assets/leadership/justServe.jpg'
import keyClub from '../assets/leadership/keyClub.jpg'
import orchPres from '../assets/leadership/orchPres.jpg'
import womenRep from '../assets/leadership/womenRep.jpg'


// Award medal positioning constants
const radius = 2.25;
const numAwards = 5;


const communityService = [
    {
        name: 'Soaps and Suds',
        icon: soapIconL,
        image: garage,
        description: 'This is a fundraiser project that uses every donation to buy large amounts of cleaning products! This includes soaps, laundry detergent, sponges, and more! They all go towards the refugees in utah at the International Refugee Committee!'
    },
    {
        name: 'Cereal Fundraiser',
        icon: cereal,
        image: '',
        description: 'As Hillcrest Student Government, we are hosting a cereal fundraiser for our pantry at school! We are trying to collect a lot more so even more students and more families are able to be provided with them!'
    },
    {
        name: 'Winter Rainn Fundraiser',
        icon: rainn,
        image: '',
        description: 'This fundraiser was done when I was Sophomore Vice President! We were raising money to donate all to the foundation Rainn! We went through many places, neighborhoods, and companies to have them donate. We also hosted a Winter fundraiser assembly where the sole purpose was to fundraise money!'
    },
    {
        name: 'Winter Brother and Sisters Fundraiser',
        icon: winter,
        image: '',
        description: 'This fundraiser was done when I was Junior Class President! We were raising money for another organization called the Brothers and Sisters foundation. We utilized many clubs and groups to spread the word and also converse with local businesses about donating to our fundraiser! We raised over $20,000 dollars in the process!'
    },
    {
        name: 'Abbington Murray Memory care Volunteer',
        icon: senior,
        image: '',
        description: 'I have been volunteering at this center for about 2 years! I do anything from helping with their activities, playing music, as well as just reaching out to the seniors to make them feel more comfortable. I mainly help in the memory care enter.'
    },
    {
        name: 'Violin Service',
        icon: violin,
        image: '',
        description: 'I have been playing the violin for the elderly for about 5 years now! I go weekly at Canyons Church and through Utah youth orchestra and ensembles, we have been to retirement centers and public neighborhoods to play for them! Additionally, During the Utah Summer arts festival, Utah Youth orchestra and ensembles gathered an octet with me playing the violin to go and play in a shop! We spent a couple hours there playing for customers as they walked in.'
    },
    {
        name: 'Justserve Volunteering',
        icon: heart,
        image: '',
        description: 'For justserve, I have volunteered as an ambassador to help spread the word about the program. It’s very useful in being more knowledged on projects happening around you as well as getting more involved in service!'
    },
]


const leadership = [
    {
        title: 'Sbo President',
        img: sbo,
        description: 'In student government, I lead winter fundraising efforts by securing donations from local businesses and communities. I also engage students in activities to boost school spirit and ensure an inclusive, safe environment for all.'
    },
    {
        title: 'UYOE Concertmaster',
        img: symphony,
        description: 'As the concertmaster of the Utah Youth Orchestra Ensembles, I focus on enhancing orchestra unity and synchronizing my section for improved sound quality. I also step in to lead when the conductor is unavailable.'
    }, {
        title: 'Honors Orch Concertmaster',
        img: honorsOrch,
        description: 'As the concertmaster of the honors orchestra, I focus on fostering a cohesive group atmosphere, especially for the numerous underclassmen. Leveraging my two-year experience as an upperclassman, I aim to make the learning process more comfortable for everyone.'
    }, {
        title: 'Utah All State Orchestra section leader',
        img: allState,
        description: 'In the Utah all state orchestra, I was the second violin section leader. As the leader, I had helped with fingerings as well as bowings to help unify the section throughout the pieces.'
    }, {
        title: 'Just Serve Ambassador',
        img: justServe,
        description: 'As an ambassador, I promoted a youth-focused volunteering app at a Utah teacher conference, discussing the importance of youth involvement.'
    }, {
        title: 'Orchestra President',
        img: orchPres,
        description: 'Being the leader of chamber orchestra at Hillcrest High School, I’m in charge of helping lead the orchestra through the music as well as the orchestration. Whenever the teacher is absent, I also fill in to guide the class as well. '
    }, {
        title: 'Key club senior representative',
        img: keyClub,
        description: 'During key club, being a senior representative means helping out especially during choices of donations as well as ways in which we can serve our community. We host meetings to help organize the club as well as going out to recruit more members.'
    }, {
        title: 'Userve Youth Council member for 2 years',
        img: userve,
        description: 'As a member of the Userve Youth Council, I initiated a fundraiser and engaged with local charities and businesses. We also collaborate with Utah students to develop community projects.'
    }, {
        title: 'Woman who succeed member',
        img: womenRep,
        description: ' During my time as a Woman who succeeded member, I was able to gain more insight on leadership and how to better myself. Using this, they have given me opportunities to show that leadership as well on calls as well as getting in touch with more leaders around me.'
    },
]

const awards = [
    {
        description: 'AP Scholar',
        position: [Math.cos((0 / numAwards) * 2 * Math.PI + Math.PI / 2) * radius - 0.5, Math.sin((0 / numAwards) * 2 * Math.PI + Math.PI / 2) * radius - 0.9, 1]
    },
    {
        description: 'National honors society',
        position: [Math.cos((1 / numAwards) * 2 * Math.PI + Math.PI / 2) * radius - 1, Math.sin((1 / numAwards) * 2 * Math.PI + Math.PI / 2) * radius - 0.8, 1]
    },
    {
        description: 'Code to Success \nAmerican Express \n     Scholarship',
        position: [Math.cos((2 / numAwards) * 2 * Math.PI + Math.PI / 2) * radius - 0.7, Math.sin((2 / numAwards) * 2 * Math.PI + Math.PI / 2) * radius - 0.7, 1]
    },
    {
        description: 'Utah Governor Volunteer \n   Recognition Award \n         Certificate',
        position: [Math.cos((3 / numAwards) * 2 * Math.PI + Math.PI / 2) * radius - 1.2, Math.sin((3 / numAwards) * 2 * Math.PI + Math.PI / 2) * radius - 0.7, 1]
    },
    {
        description: 'Honor Roll',
        position: [Math.cos((4 / numAwards) * 2 * Math.PI + Math.PI / 2) * radius - 0.6, Math.sin((4 / numAwards) * 2 * Math.PI + Math.PI / 2) * radius - 0.85, 1]
    },
]

export { communityService, leadership, awards }