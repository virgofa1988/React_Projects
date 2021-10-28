import { unwrapResult } from '@reduxjs/toolkit'
import classNames from 'classnames'
import DOMPurify from 'dompurify'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { toast } from 'react-toastify'
import { SVGAddToCart, SVGNextIconSlider, SVGPrevIconSlider } from 'src/assets/svgs/svg'
import QuantityController from 'src/components/ProductQuantityController/QuantityController'
import ProductRating from 'src/components/ProductRating/ProductRating'
import { path } from 'src/constants/path'
import { getPurchaseCart } from 'src/Redux/cart.slice'
import { addToCart, getProductDetail } from 'src/Redux/productDetail.slice'
import { formatK, getIdProductFromURL, rateSale } from 'src/utils/helper'
import * as S from './productDetail.style'

export default function ProductDetail() {
  const dispatch = useDispatch()
  const { idProduct } = useParams()
  const history = useHistory()
  //State to save product information
  const [product, setProduct] = useState()
  //Array of Images for slider
  const [currentImageIndex, setCurrentImageIndex] = useState([0, 5])
  //Set the first image should be shown up
  const [sliderImage, setSliderImage] = useState({})
  //Handle quantity of cart
  const [quantity, setQuantity] = useState(1)
  // Current Images Array in Slider
  const currentImages = useMemo(() => {
    if (product) {
      //Cut the original array of igmate into fisrt 5 pictures
      return product.images.slice(...currentImageIndex)
    }
  }, [currentImageIndex, product])
  //Get realID from URL by helper function
  const id = getIdProductFromURL(idProduct)

  //Load Product Detail when didMount
  useEffect(() => {
    const _getProductDetail = async () => {
      const data = await dispatch(getProductDetail(id))
      const result = unwrapResult(data) //Get Error
      //Change images Array of string into Array of object(id,url)
      result.data.images = result.data.images.map((image, index) => {
        return { url: image, id: index }
      })
      //Get 1st images
      setSliderImage(result.data.images[0])
      //Get Product Detail into State
      setProduct(result.data)
    }
    _getProductDetail()
  }, [id])

  //handleClick and onHover Image
  const handleSliderImage = img => {
    setSliderImage(img)
  }
  //handle Next and Prev
  const handlePrev = () => {
    if (currentImageIndex[0] > 0) {
      setCurrentImageIndex(currentImageIndex => [currentImageIndex[0] - 1, currentImageIndex[1] - 1])
    }
  }
  const handleNext = () => {
    if (currentImageIndex[1] < product.images.length) {
      setCurrentImageIndex(currentImageIndex => [currentImageIndex[0] + 1, currentImageIndex[1] + 1])
    }
  }

  //HandleChange Quantity
  const handleQuantity = quantity => setQuantity(quantity)

  //Add to Cart
  const handleAddToCart = async () => {
    const body = {
      product_id: product._id,
      buy_count: quantity
    }
    try {
      //AddToCart

      const data = await dispatch(addToCart(body))
      unwrapResult(data)
      //Toastify
      toast.success('Item successfully added to cart', { position: 'top-center', autoClose: 4000, theme: 'colored' })
      //GetProductInCart
      const result = await dispatch(getPurchaseCart())
      const _result = unwrapResult(result)
      console.log('GetPurchaseCartAPI is ', _result)
    } catch (error) {
      console.log('Error ', error)
      toast.warning('Please login', { position: 'top-center', autoClose: 4000, theme: 'colored' })
    }
  }
  return (
    <div>
      {product && (
        <div className="container">
          <S.ProductBrief>
            {/* Product Images Slider */}
            <S.ProductImages>
              <S.ProductImageActive>
                <img src={sliderImage.url} alt={product.name} />
              </S.ProductImageActive>
              <S.ProductImagesSlider>
                <S.ProductIconButtonPrev onClick={handlePrev}>
                  <SVGPrevIconSlider />
                </S.ProductIconButtonPrev>
                {/* Images Render */}
                {currentImages?.map(img => {
                  return (
                    <S.ProductImage
                      active={sliderImage.id == img.id}
                      key={img.id}
                      onClick={() => handleSliderImage(img)}
                      onMouseOver={() => handleSliderImage(img)}
                    >
                      <img src={img.url} alt={`image${img.id}`} />
                    </S.ProductImage>
                  )
                })}
                <S.ProductIconButtonNext onClick={handleNext}>
                  <SVGNextIconSlider />
                </S.ProductIconButtonNext>
              </S.ProductImagesSlider>
            </S.ProductImages>
            {/* Product Meta */}
            <S.ProductMeta>
              <S.ProductTitle>{product.name}</S.ProductTitle>
              <S.ProductMeta1>
                <S.ProductRating>
                  <span>{product.rating}</span>
                  <ProductRating rating={product.rating} />
                </S.ProductRating>
                <S.ProductSold>
                  <span>{formatK(product.sold)}</span>
                  <span>Sold</span>
                </S.ProductSold>
              </S.ProductMeta1>
              <S.ProductPrice>
                <S.ProductOriginalPrice>đ {product.price_before_discount.toLocaleString()}</S.ProductOriginalPrice>
                <S.ProductSalePrice>đ {product.price.toLocaleString()}</S.ProductSalePrice>
                <S.ProductPercentPrice>
                  {rateSale(product.price_before_discount, product.price)} Sale off
                </S.ProductPercentPrice>
              </S.ProductPrice>
              <S.ProductBuyQuantity>
                <S.ProductBuyQuantityTitle>Quantity</S.ProductBuyQuantityTitle>
                <S.ProductBuyQuantityController>
                  <QuantityController value={quantity} max={product.quantity} onChange={handleQuantity} />
                </S.ProductBuyQuantityController>
                <S.ProductInventory>{product.quantity.toLocaleString()} in stock</S.ProductInventory>
              </S.ProductBuyQuantity>
              <S.ProductButton onClick={handleAddToCart}>
                <SVGAddToCart />
                Add to cart
              </S.ProductButton>
            </S.ProductMeta>
          </S.ProductBrief>
          {/* Product Description */}

          <S.ProductContent>
            <S.ProductContentHeading>Product Description</S.ProductContentHeading>
            {/* This way help render HTML and keep HTML format
            DOMPurify is a npm packakge to prevent XSS attack
            */}
            <S.ProductContentDetail dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }} />
          </S.ProductContent>
        </div>
      )}
    </div>
  )
}
