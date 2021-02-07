package com.tweets; // replace com.your-app-name with your app’s name
import com.facebook.react.bridge;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import android.content.Intent;
import android.app.Activity;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;


// public class BaseActivityEventListener implements ActivityEventListener {

//   /** @deprecated use {@link #onActivityResult(Activity, int, int, Intent)} instead. */
//   @Deprecated
//   public void onActivityResult(int requestCode, int resultCode, Intent data) {}

//   @Override
//   public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {}

//   @Override
//   public void onNewIntent(Intent intent) {}
// }

// public interface ActivityEventListener {

//   /** Called when host (activity/service) receives an {@link Activity#onActivityResult} call. */
//   void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data);

//   /** Called when a new intent is passed to the activity */
//   void onNewIntent(Intent intent);
// }

public class ImagePickerModule extends ReactContextBaseJavaModule {

  private static final int IMAGE_PICKER_REQUEST = 1;
  private static final String E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST";
  private static final String E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
  private static final String E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER";
  private static final String E_NO_IMAGE_DATA_FOUND = "E_NO_IMAGE_DATA_FOUND";

  private Promise mPickerPromise;

  // private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {

  //   @Override
  //   public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {
  //        Log.d("ImagePickerModule","image module Action");
  //     if (requestCode == IMAGE_PICKER_REQUEST) {
  //       if (mPickerPromise != null) {
  //         if (resultCode == Activity.RESULT_CANCELED) {
  //           mPickerPromise.reject(E_PICKER_CANCELLED, "Image picker was cancelled");
  //         } else if (resultCode == Activity.RESULT_OK) {
  //           Uri uri = intent.getData();

  //           if (uri == null) {
  //             mPickerPromise.reject(E_NO_IMAGE_DATA_FOUND, "No image data found");
  //           } else {
  //             mPickerPromise.resolve(uri.toString());
  //           }
  //         }

  //         mPickerPromise = null;
  //       }
  //     }
  //   }
  // };

  ImagePickerModule(ReactApplicationContext reactContext) {
    super(reactContext);

    // Add the listener for `onActivityResult`
    reactContext.addActivityEventListener(mActivityEventListener);
  }

  @Override
  public String getName() {
    return "ImagePickerModule";
  }

  @ReactMethod
  public void pickImage(final Promise promise) {
      Log.d("ImagePickerModule","image module");
    // Activity currentActivity = getCurrentActivity();

    // if (currentActivity == null) {
    //   promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist");
    //   return;
    // }

    // // Store the promise to resolve/reject when picker returns data
    // mPickerPromise = promise;

    // try {
    //   final Intent galleryIntent = new Intent(Intent.ACTION_PICK);

    //   galleryIntent.setType("image/*");

    //   final Intent chooserIntent = Intent.createChooser(galleryIntent, "Pick an image");

    //   currentActivity.startActivityForResult(chooserIntent, IMAGE_PICKER_REQUEST);
    // } catch (Exception e) {
    //   mPickerPromise.reject(E_FAILED_TO_SHOW_PICKER, e);
    //   mPickerPromise = null;
    // }
  }
}