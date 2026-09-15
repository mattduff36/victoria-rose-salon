'use client';

import { Plus, Trash } from '@phosphor-icons/react';
import ImageUpload from '@/components/admin/ImageUpload';
import { AdminNotice, CheckboxField, PageIntro, SaveBar, TextField } from '@/components/admin/fields';
import { useAdminContent } from '@/components/admin/use-admin-content';
import { createContentId, type TeamMember } from '@/lib/content-types';

function emptyMember(index: number): TeamMember {
  return {
    id: createContentId('team'),
    name: '',
    role: '',
    imageUrl: '/default-team.jpg',
    sortOrder: index,
    isOwner: false,
  };
}

export default function AdminTeamPage() {
  const { content, setContent, status, error, save } = useAdminContent();

  if (status === 'loading' || !content) {
    return <AdminNotice title="Loading team" body={error || 'Fetching staff records.'} />;
  }

  const team = [...content.team].sort((a, b) => a.sortOrder - b.sortOrder);

  function updateMember(id: string, patch: Partial<TeamMember>) {
    setContent({
      ...content!,
      team: content!.team.map((member) => (member.id === id ? { ...member, ...patch } : member)),
    });
  }

  return (
    <div>
      <PageIntro title="Team">
        Add or update staff. Photos upload to Cloudinary. Owners appear first on the public team page.
      </PageIntro>
      <div className="mb-6">
        <button
          type="button"
          onClick={() => setContent({ ...content, team: [...content.team, emptyMember(content.team.length)] })}
          className="inline-flex items-center gap-2 rounded-lg bg-[#31734d] px-3 py-2 text-sm font-semibold text-white hover:bg-[#245538]"
        >
          <Plus size={16} />
          Add team member
        </button>
      </div>
      <div className="space-y-4">
        {team.map((member) => (
          <article key={member.id} className="rounded-xl border border-[#d5d0c6] bg-[#fffcf7] p-5">
            <div className="grid gap-4 md:grid-cols-[160px_minmax(0,1fr)_auto]">
              <ImageUpload
                label="Photo"
                folder="team"
                value={member.imageUrl}
                onUploaded={({ url, publicId }) => updateMember(member.id, { imageUrl: url, imagePublicId: publicId })}
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <TextField label="Name" value={member.name} onChange={(event) => updateMember(member.id, { name: event.target.value })} />
                <TextField label="Role" value={member.role} onChange={(event) => updateMember(member.id, { role: event.target.value })} />
                <TextField
                  label="Display order"
                  type="number"
                  value={member.sortOrder}
                  onChange={(event) => updateMember(member.id, { sortOrder: Number(event.target.value) })}
                />
                <div className="flex items-end pb-2">
                  <CheckboxField
                    label="Salon owner"
                    checked={member.isOwner}
                    onChange={(checked) => updateMember(member.id, { isOwner: checked })}
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => setContent({ ...content, team: content.team.filter((item) => item.id !== member.id) })}
                className="h-10 self-start rounded-lg border border-[#d5d0c6] px-3 text-[#9b2c2c] hover:bg-[#f8e8e8]"
                aria-label={`Remove ${member.name || 'team member'}`}
              >
                <Trash size={18} />
              </button>
            </div>
          </article>
        ))}
      </div>
      {team.length === 0 ? (
        <AdminNotice title="No team members yet" body="Add the first stylist or therapist to populate the Our Team page." />
      ) : null}
      <SaveBar status={status} error={error} onSave={() => void save()} />
    </div>
  );
}
