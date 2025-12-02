// Dummy data for Dashboard
export const stats = {
  total: 12,
  my: 7,
  other: 5
};

export const myEvents = [
  {
    id: 'm1',
    title: 'Spring Fundraiser',
    association: "IEEE",
    date: '2025-04-10',
    coordinator: 'Alice Johnson',
    venue: 'IIT1',
    status: 'Ongoing',
    stage: 'Execution'
  },
  {
    id: 'm2',
    title: 'Volunteer Meetup',
    association: "CSBSA",
    date: '2025-05-22',
    coordinator: 'Carlos Mendes',
    venue: 'IIT2',
    status: 'Planning',
    stage: 'Proposal'
  },
  {
    id: 'm3',
    title: 'Annual Conference',
    association: "ASI",
    date: '2025-09-12',
    coordinator: 'Sofia Lee',
    venue: 'IIT3',
    status: 'Completed',
    stage: 'Completed'
  }
];

export const otherEvents = [
  {
    id: 'o1',
    title: 'Neighborhood Cleanup',
    association: 'IEEE',
    date: '2025-03-02',
    coordinator: 'Liam Brown',
    venue: 'IIT4',
    status: 'Completed',
    stage: 'Completed'
  },
  {
    id: 'o2',
    title: 'Food Drive',
    association: 'CSBSA',
    date: '2025-06-15',
    coordinator: 'Nora Patel',
    venue: 'IIT2',
    status: 'Ongoing',
    stage: 'Preparation'
  }
];

const dummy = { stats, myEvents, otherEvents };

export default dummy;
