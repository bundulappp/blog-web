import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss'],
})
export class AccountPageComponent {
  size: NzButtonSize = 'large';
  emailValue: string | null = 'bundulappp@gmail.com';
  usernameValue: string | null = 'bundulappp';
  isVisiblePhotoModal = false;
  isVisibleEmailModal = false;
  isVisibleUsernameModal = false;

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      console.log('done');
    } else if (info.file.status === 'error') {
      console.log('error');
    }
  }

  showUsernameModal(): void {
    this.isVisibleUsernameModal = true;
  }

  showEmailModal(): void {
    this.isVisibleEmailModal = true;
  }

  showPhotoModal(): void {
    this.isVisiblePhotoModal = true;
  }

  handleUsernameModalOk(): void {
    console.log('Button ok clicked!');
    this.isVisibleUsernameModal = false;
  }

  handleEmailModalOk(): void {
    console.log('Button ok clicked!');
    this.isVisibleEmailModal = false;
  }

  handlePhotoModalOk(): void {
    console.log('Button ok clicked!');
    this.isVisiblePhotoModal = false;
  }

  handleUsernameModalCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleUsernameModal = false;
  }

  handleEmailModalCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleEmailModal = false;
  }

  handlePhotoModalCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisiblePhotoModal = false;
  }
}
