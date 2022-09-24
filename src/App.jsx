import { Fragment } from 'react'

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';


import { Container } from './App.styled';

import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';


export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <Container> 
      <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />
    </Container>
  );
};
