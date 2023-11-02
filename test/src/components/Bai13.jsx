import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  // Bước 3: Tạo hàm để cập nhật trạng thái modal
  openModal = () => {
    this.setState({ isModalOpen: true });
  }

  closeModal = () => {
    this.setState({ isModalOpen: false });
  }

  render() {
    // Bước 4: Hiển thị nội dung tương ứng khi modal được mở
    const modalContent = (
      <div className="modal-content">
        <span className="close" onClick={this.closeModal}>&times;</span>
        <h2>Nội dung của Modal</h2>
        <p>Đây là nội dung của Modal.</p>
      </div>
    );

    return (
      <div>
        <button onClick={this.openModal}>Mở Modal</button>
        {this.state.isModalOpen && modalContent}
      </div>
    );
  }
}

export default Modal;