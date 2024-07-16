# Supabugs Widget

**A tiny widget to collect feedback / issues / bugs from anywhere on supabugs.
That’s it.**

<p>
    <a target="_blank" rel="noopener" href="https://www.supabugs.io"><b>Website</b></a> •
    <a target="_blank" rel="noopener" href="https://discord.com/invite/jXfS94EvVN"><b>Discord</b></a> •
    <a target="_blank" rel="noopener" href="https://twitter.com/releasycorp"><b>Twitter</b></a>
</p>

<video
   width="100%"
   height="100%"
   auto-play
   controls
   muted
   style="border-radius: 15px">

   <source
      src="https://supabugs.s3.amazonaws.com/public/screenrun-widget.mp4"
      type="video/mp4"
   />
</video>

[Try the widget&nbsp;&UpperRightArrow;](https://www.releasy.xyz)

## Quick Start

1. Load the widget on your page:

   ```html
   <script src="https://unpkg.com/supabugs-widget@1.0.2" defer></script>
   ```

2. Set a div to open the widget:
   ```html
   <div
     id="supabugs__widget__container"
     data-token="XYZ"
     data-type="true"
     data-priority="true"
     data-severity="true"
     data-attachments="true"
   ></div>
   ```

## Setting up the Widget

This is the URL to send the feedback to. The widget will make a POST request to
this URL with the feedback data as a JSON body.

## Options

Options are set as `data-` properties:

### `data-token`

The token generated from your Supabugs account. The widget will create issues
with this token, so be careful to set up a long term expiring date and to give
it at least `Issue Create` permissions.

### `data-type`

Default `false`. Set it to `true`if you want to show the issue Type select
dropdown.

### `data-priority`

Default `false`. Set it to `true`if you want to show the issue Priority select
dropdown.

### `data-severity`

Default `false`. Set it to `true`if you want to show the issue Severity select
dropdown.

### `data-attachments`

Default `false`. Set it to `true`if you want to show the upload Attachments
field.

## How it works

When the script is loaded, it looks for the element with the
`supabugs__widget__container` id and inject the create issue iframe from
[supabugs](https://cloud.supabugs.io)

## Contributing

Contribute to Supabugs with issues and pull requests in
[the GitHub repo](https://github.com/supabugs/supabugs-widget).

## Support

- Join a community of developers on
  [Discord](https://discord.com/invite/jXfS94EvVN)
- Follow us on [Twitter](https://twitter.com/releasyappio)
