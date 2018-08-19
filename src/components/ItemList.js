// @flow
import React from 'react';
import ItemCard from './ItemCard';

type Props = {
  post: {
    isFetching: boolean,
    items: Array<any>,
    error: any
  },
  fetchItemList: () => void
};

export default class ItemList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchItemList();
  }

  render() {
    const { isFetching, items, error } = this.props.post;
    if (isFetching) return null;
    if (0 !== Object.keys(error).length) return <h3>エラーが発生しました</h3>;

    const itemList = items.map((item, index) => (
      <ItemCard item={item} key={index} />
    ));
    return itemList;
  }
}
