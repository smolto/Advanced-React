/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Dot = styled.div``;
export default function CartCount({ count }) {
  return <Dot>{count}</Dot>;
}
