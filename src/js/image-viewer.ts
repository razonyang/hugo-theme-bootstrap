import Modal from 'bootstrap/js/dist/modal';

class ImageViewer {
  modalElement: string = `
<div class="modal image-viewer surface" tabindex="-1">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Image Viewer</h5>
        <button type="button" class="btn btn-sm btn-outline-primary" data-bs-dismiss="modal" aria-label="Close">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="modal-body justify-content-center align-items-center">
        <img />
      </div>
      <div class="modal-footer justify-content-center">
        <button class="btn btn-sm btn-primary action action-rotate-anticlockwise" aria-label="Rotate anticlockwise">
          <i class="fas fa-undo"></i>
        </button>
        <button class="btn btn-sm btn-primary action action-rotate-clockwise" aria-label="Rotate clockwise">
          <i class="fas fa-undo fa-flip-horizontal"></i>
        </button>
        </div>
      </div>
    </div>
  </div>
</div>`.trim();
  
  modal: Modal;

  img: HTMLImageElement;

  rotateDegree: number = 0;
  btnRotateClockwise: HTMLElement;
  btnRotateAnticlockwise: HTMLElement;

  run() {
    const self = this;
    
    document.body.insertAdjacentHTML('beforeend', this.modalElement);
    const ele = document.querySelector('.image-viewer');
    this.modal = new Modal(ele, {});
    this.img = ele.querySelector('.modal-body img');

    this.btnRotateClockwise = ele.querySelector('.action-rotate-clockwise');
    this.btnRotateClockwise.addEventListener('click', function () {
      self.rotateClockwise();
    });

    this.btnRotateAnticlockwise = ele.querySelector('.action-rotate-anticlockwise');
    this.btnRotateAnticlockwise.addEventListener('click', function () {
      self.rotateAnticlockwise();
    });


    document.querySelectorAll('img').forEach(function (img) {
      if (img.parentElement.tagName !== 'A') {
        img.addEventListener('click', function () {
          self.reset(img);
          self.modal.show();
        });
      }
    });
  }

  rotateClockwise() {
    this.rotateDegree += 90;
    this.rotate();
  }

  rotateAnticlockwise() {
    this.rotateDegree -= 90;
    this.rotate();
  }

  rotate() {
    this.transform();
  }

  transform() {
    const values = new Array();
    if (this.rotateDegree != 0) {
      values.push('rotateZ(' + this.rotateDegree + 'deg)');
    }
    this.img.style.transform = values.join(' ');
  }

  reset(img) {
    this.rotateDegree = 0;
    this.img.src = img.src;
    this.img.style.transform = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  (new ImageViewer()).run();
});
