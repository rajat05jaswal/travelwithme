package com.travelwithme;

import android.content.Intent;
import com.facebook.CallbackManager;

import android.app.Application;
import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsLogger;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.devfd.RNGeocoder.RNGeocoderPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.airbnb.android.react.maps.MapsPackage;


import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }
  @Override
  public void onCreate() {
    super.onCreate();
    // Initialize the SDK before executing any other operations.
    FacebookSdk.sdkInitialize(getApplicationContext());
    // Use AppEventsLogger to log custom events.3
//    SoLoader.init(this, /* native exopackage */ false);
    AppEventsLogger.activateApp(this);
  }
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
              new MainReactPackage(),
              new VectorIconsPackage(),
              new MapsPackage(),
              new RNGeocoderPackage(),
              new FBSDKPackage(mCallbackManager)
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

}