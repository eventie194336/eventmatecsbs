import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import StatsCards from './components/StatsCards';
import SectionTitle from './components/SectionTitle';
import EventList from './components/EventList';
import dummy from './dummyEvents';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('All');

  const { stats, myEvents, otherEvents } = dummy;

  // Filters computed with useMemo to avoid unnecessary recomputation
  const filteredMy = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return myEvents.filter((ev) => {
      const matchesQuery =
        !q ||
        ev.title.toLowerCase().includes(q) ||
        (ev.association && ev.association.toLowerCase().includes(q)) ||
        (ev.coordinator && ev.coordinator.toLowerCase().includes(q));

      const matchesTab =
        selectedTab === 'All' || (ev.status && ev.status.toLowerCase() === selectedTab.toLowerCase());

      return matchesQuery && matchesTab;
    });
  }, [searchQuery, selectedTab, myEvents]);

  const filteredOther = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return otherEvents.filter((ev) => {
      const matchesQuery =
        !q ||
        ev.title.toLowerCase().includes(q) ||
        (ev.association && ev.association.toLowerCase().includes(q)) ||
        (ev.coordinator && ev.coordinator.toLowerCase().includes(q));

      const matchesTab =
        selectedTab === 'All' || (ev.status && ev.status.toLowerCase() === selectedTab.toLowerCase());

      return matchesQuery && matchesTab;
    });
  }, [searchQuery, selectedTab, otherEvents]);

  const handleCreate = () => {
    // Placeholder create action
    alert('Create Event clicked — integrate create flow here.');
  };

  return (
    <div style={{ padding: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <Navbar onCreate={handleCreate} />

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      <StatsCards stats={stats} />

      <SectionTitle title="My Association's Events" />
      <EventList events={filteredMy} mode="my" />

      <SectionTitle title="Other Events" />
      <EventList events={filteredOther} mode="other" />
    </div>
  );
};

export default Dashboard;
