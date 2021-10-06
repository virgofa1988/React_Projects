import React from 'react'
import * as F from './footer.style'
export default function Footer() {
  return (
    <F.Footer>
      <div className="container_footer">
        <F.Footer1>
          <div>
          © 2021 Shopee. Tất cả các quyền được bảo lưu. 
          </div>
        <F.Language>
          Languages:
          <span>English</span>
          <span>Vietnamese</span>
        </F.Language>
        </F.Footer1>
        <F.Footer2>
          <div>Công ty TNHH Shopee</div>
          <div>Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</div>
          <div>
          Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
          </div>
          <div>
          © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
          </div>
        </F.Footer2>
      </div>
    </F.Footer>
  )
}
