import PropTypes from 'prop-types';
import { Section, Title, List, Item, Label } from './Statistics.styled';

const getRandomHexColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Title>{title}</Title>

      <List>
        {stats.map(stat => {
          return (
            <Item
              key={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <Label>{stat.label}</Label>

              <span className="percentage">{stat.percentage}%</span>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
