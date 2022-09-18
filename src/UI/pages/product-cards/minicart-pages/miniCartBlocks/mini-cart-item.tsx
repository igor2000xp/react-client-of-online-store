import React from 'react';
import stylesMBlock from './mini-cart-item.module.css';
import MiniCartBasicBlock from '../mini-cart-basic-block/mini-cart-basic-block';
import { ICardItemProps } from '../../../common-models';
import CardItem from '../../plp-card/card-item/card-item';

type IProps = Readonly<ICardItemProps>;

class MiniCartItem extends CardItem {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const modifiedProducts = this.modifiedProducts;
    const prodGallery =
      typeof this.product.gallery !== 'undefined'
        ? this.product.gallery[this.state.mainImageIndex]
        : '';
    const isArrowButtons = !(this.product.gallery.length === 1);
    return (
      <article className={stylesMBlock.wrapper}>
        <section className={stylesMBlock.leftSide}>
          <MiniCartBasicBlock
            product={this.product}
            modifiedProducts={modifiedProducts}
            currentCurrency={this.props.currency.symbol}
          />
        </section>

        <aside className={stylesMBlock.rightSide}>
          <section className={stylesMBlock.buttonSide}>
            <button
              className={`${stylesMBlock.buttonQuality}`}
              onClick={this.plusHandle}
            >
              <p className={stylesMBlock.plus} />
            </button>
            <div className={stylesMBlock.numberInBasket}>
              {this.state.quantityInBasket}
            </div>
            <button
              className={stylesMBlock.buttonQuality}
              onClick={this.minusHandle}
            >
              <p className={stylesMBlock.minus} />
            </button>
          </section>

          <section>
            <div className={stylesMBlock.imageBlock}>
              <img src={prodGallery} alt="product image" />
              {isArrowButtons ? (
                <button
                  className={`${stylesMBlock.arrow} ${stylesMBlock.arrowLeft}`}
                  onClick={() => this.handleImagePrev()}
                >
                  <div className={`${stylesMBlock.arrowSvgLeft}`} />
                </button>
              ) : (
                <div />
              )}
              {isArrowButtons ? (
                <button
                  className={`${stylesMBlock.arrow} ${stylesMBlock.arrowRight}`}
                  onClick={() => this.handleImageNext()}
                >
                  <div className={`${stylesMBlock.arrowSvgRight}`} />
                </button>
              ) : (
                <div />
              )}
            </div>
          </section>
        </aside>
      </article>
    );
  }
}

export default MiniCartItem;
