<script>
  // Props (keep it simple)
  export let accessKey = '';                       // REQUIRED: your Web3Forms public key
  export let subject = 'New message from Re-roll & Rally';
  export let buttonText = 'Send message';

  // Presentation options
  export let framed = true;                        // wrap inside a card
  export let heading = 'Contact';
  export let description = 'Questions, feedback, collaboration ideas—drop me a line.';
  export let showSubjectField = false;             // optional visible subject input
</script>

<div class={framed ? 'card bg-base-200 shadow-md' : ''}>
  <div class={framed ? 'card-body' : ''}>
    {#if framed}
      <h2 class="card-title">{heading}</h2>
      {#if description}<p class="text-base-content/70">{description}</p>{/if}
    {/if}

    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      class="space-y-4"
    >
      <!-- Required by Web3Forms -->
      <input type="hidden" name="access_key" value={accessKey} />
      {#if subject}<input type="hidden" name="subject" value={subject} />{/if}

      <!-- Honeypot (spam protection) -->
      <input type="text" name="botcheck" class="hidden" tabindex="-1" autocomplete="off" />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Name -->
        <div class="form-control">
          <label class="label"><span class="label-text">Name <span class="text-error">*</span></span></label>
          <input
            name="name"
            required
            autocomplete="name"
            class="input input-bordered w-full"
            placeholder="Your name"
          />
        </div>

        <!-- Email -->
        <div class="form-control">
          <label class="label"><span class="label-text">Email <span class="text-error">*</span></span></label>
          <input
            type="email"
            name="email"
            required
            autocomplete="email"
            class="input input-bordered w-full"
            placeholder="you@example.com"
          />
        </div>

        {#if showSubjectField}
          <!-- Optional visible subject -->
          <div class="form-control md:col-span-2">
            <label class="label"><span class="label-text">Subject</span></label>
            <input name="topic" class="input input-bordered w-full" placeholder="What’s this about?" />
          </div>
        {/if}
            <input type="hidden" name="redirect" value="https://reroll-and-rally.fly.dev/contact/thanks" />
        <!-- Message -->
        <div class="form-control md:col-span-2">
          <label class="label"><span class="label-text">Message <span class="text-error">*</span></span></label>
          <textarea
            name="message"
            rows="6"
            required
            class="textarea textarea-bordered w-full"
            placeholder="Tell me a bit about your question or project…"
          ></textarea>
        </div>

        <!-- Slot for any extra fields (checkboxes, select, etc.) -->
        <div class="md:col-span-2">
          <slot />
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button class="btn btn-primary">{buttonText}</button>
        <button type="reset" class="btn btn-ghost">Reset</button>
      </div>
    </form>
  </div>
</div>
